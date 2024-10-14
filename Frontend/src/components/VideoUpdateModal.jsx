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
  FormLabel
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setVideos } from '../utils/homeVideosSlice';


export default function VideoUpdateModal({ videoId }) {

const { isOpen, onOpen, onClose } = useDisclosure();
const [update, setUpdate] = useState({ title: '', desc: '',imgUrl:'' });
const dispatch = useDispatch();

const handleChange = (e) => {
    setUpdate({...update,[e.target.name]:e.target.value});
  }

const handleUpdate = async() => {
  
    try {
      const response = await fetch(`http://localhost:5100/api/v1/temp/${videoId}`, {
        method: 'PATCH',
        headers: {
                    'Content-Type': 'application/json',
        },
        credentials: 'include',
        body:JSON.stringify(update)
      },
        
        )
      const data = await response.json();
      dispatch(setVideos(data.data));
      console.log(data);
      onClose();
      
    }
    catch(error){
      console.log(error)
    }
}


//Component is menu of the modal on channel page containg update to update the video uploaded by authorized user
    return (<>
    <Button onClick={onOpen}>Update</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Name</FormLabel>
            <Input onChange={handleChange} name='title' value={update.title} type='text'></Input>
             <FormLabel>Description</FormLabel>
            <Input onChange={handleChange} name='desc' value={update.desc} type='text'></Input>
            <FormLabel>Thumbnail</FormLabel>
            <Input onChange={handleChange} name='imgUrl' value={update.imgUrl} type='text'></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={handleUpdate}>Update</Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
        
    </>)
}