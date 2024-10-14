import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setVideos } from "../utils/homeVideosSlice";
import { BiVideoPlus } from "react-icons/bi";


export default function uploadModal() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState([]);
  const [tags, setTags] = useState([]);

  const handleChange = e => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value,channel:currentUser.channel_name };
    })
  };
  
    const handleTags = (e) => {
    setTags(e.target.value.toLowerCase().split(","));
  };
  
  const uploadFile = (file,urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    //Method by firebase to upload video and image files
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {console.error(error)},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );

}


  useEffect(() => {video && uploadFile(video,"videoUrl") }, [video]);
  useEffect(() => { img && uploadFile(img, "imgUrl") }, [img]);
  

  //Updates the DB with url of the firebase video uploaded file ,images and inputs by user  such as name and description of video
  const handleUpload = async (e) => {
    e.preventDefault();

  try {
    const res = await fetch('http://localhost:5100/api/v1/temp/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({...inputs,tags})
    });

      const videosRes = await fetch("http://localhost:5100/api/v1/temp/getVideos");
      const videosData = await videosRes.json();

      // Dispatch the setVideos action with the new video data
      dispatch(setVideos(videosData.data)); 



      setImg(undefined);
      setVideo(undefined);
      setImgPerc(0);
      setVideoPerc(0);
      setInputs({});
    onClose();
    }
    catch (err)
  {
    console.log(err);
    
    }

   
  }

  //Upload form component 

  return (
    <>
     
        <BiVideoPlus cursor={'pointer'} onClick={onOpen} size={24} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Upload Your Video</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <FormControl>
              <FormLabel>Select Video File</FormLabel>
              {videoPerc>0?("Uploaded"+" "+videoPerc):(<Input type="file" accept="video/*" onChange={e=>setVideo(e.target.files[0])}/>)}
            </FormControl>
          <FormControl>
              <FormLabel>Select Image File</FormLabel>
              {imgPerc>0?("Uploaded"+" "+imgPerc):(<Input type="file" accept="image/*" onChange={e=>setImg(e.target.files[0])} />)}
            </FormControl>
            <Input type="text" name="title" placeholder="Title" onChange={handleChange}></Input>
            <Input type="text" name="desc" placeholder="Description" onChange={handleChange}></Input>
            <Input type="text" placeholder="Tags separated by commas" onChange={handleTags}></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpload} >  
              
              Upload
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}