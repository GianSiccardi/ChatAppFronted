import React, { useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { FaPlus } from 'react-icons/fa'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from '@/components/ui/input'
import { ainimationDefaultOptions } from '@/utils/utils';

import Lottie from 'react-lottie';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '@/Redux/store';
import { colors, getColor } from '@/utils/utils';
import { searchUser, selectChat } from '@/Redux/Auth/Actions'
import { chatCreate } from '@/Redux/Chat/Actions'

const NewDm = ({ item }) => {


    const { auth, chat } = useSelector(store => store);

    const [openNewContactModel, setOpenNewContactModel] = useState(false);
    const searchConctacted = useSelector(state => state.auth.searchContacted);
    const [image, setImage] = useState(null);
    const [keyword, setKeyword] = useState('')
    const jwt = localStorage.getItem("jwt")
    const dispatch = useDispatch()


    const handleClikOnChatCard = (userId) => {
       
        if (!jwt) {
            console.error("Token JWT no encontrado");
            return; 
        }
        dispatch(chatCreate(jwt, { userId })); 
    };


    const handleSearchUser = (keyword) => {
        setKeyword(keyword);
        if (keyword) {
            dispatch(searchUser({ keyword }));
        }
    };


    const selecteNewConctat = (contact) => {
        dispatch(selectChat(contact));

        setOpenNewContactModel(false);
    }

    return (
        <>
            <TooltipProvider>

                <Tooltip>
                    <TooltipTrigger>
                        <FaPlus
                            className='text-neutral-400 font-light opacity-90 hover:text-neutral-100 cursor-pointer transition-all duration-300'
                            onClick={() => setOpenNewContactModel(true)}
                        />
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1c1b1e] border-none mb-2 p-3 text-white">

                    </TooltipContent>
                </Tooltip>

            </TooltipProvider>
            <Dialog open={openNewContactModel} onOpenChange={setOpenNewContactModel}>
                <DialogTrigger></DialogTrigger>
                <DialogContent className="bg-[#181920] border-none text-white w-[400px] h-[400px] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Selecciona el contacto</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div className="">
                        <Input
                            placeholder="Busca el contacto"
                            className="rounded-lg p-6 bg-[#2c2e3b] border-none"
                            onChange={(e) => handleSearchUser(e.target.value)}

                        />
                    </div>
                    <ScrollArea className="h-[55vh] overflow-y-auto">
                        <div className="flex flex-col gap-5">
                            {Array.isArray(searchConctacted) && searchConctacted.map((contact) => (
                                <div key={contact.id}
                                    onClick={() => {
                                        selecteNewConctat(contact);
                                        handleClikOnChatCard(contact.id);
                                    }}
                                    className='flex gap-3 items-center cursor-pointer'>
                                    <div className='w-18 h-18 relative'>
                                        <Avatar className='h-12 w-12 rounded-full overflow-hidden'>
                                            {contact.image ? (
                                                <AvatarImage
                                                    src={contact.image}
                                                    className='object-cover w-full h-full bg-black'
                                                    alt="Avatar"
                                                />
                                            ) : (
                                                <div className={`uppercase h-16 w-16 text-5xl border border-gray-300 flex items-center justify-center rounded-full ${getColor(contact.selectedColor)}`}>
                                                    {contact.fullName ? contact.fullName.charAt(0) : contact.email.charAt(0)}
                                                </div>
                                            )}
                                        </Avatar>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col">
                                            <span>{contact.fullName}</span>
                                            <span className='text-xs'>{contact.email}</span>
                                        </div>


                                    </div>
                                </div>
                            ))}

                        </div>
                        { }

                    </ScrollArea>

                    {
                        searchConctacted.length <= 0 && (
                            <div className='flex-1 md:bg-[#181920] md:flex flex-col justify-center items-center duration-1000 transition-all'>
                                <Lottie
                                    isClickToPauseDisabled={true}
                                    height={100}
                                    width={100}
                                    options={ainimationDefaultOptions} />
                                <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-2xl text-3xl transition-all duration-300 text-center">
                                    <h3 className='poppins-medium'>
                                        Hola!<span className='text-purple-500'> Buscas </span> un nuevo

                                        <span className='text-purple-500'> amigo?</span>
                                    </h3>

                                </div>
                            </div>
                        )
                    }

                </DialogContent>
            </Dialog>

        </>
    )
}

export default NewDm
