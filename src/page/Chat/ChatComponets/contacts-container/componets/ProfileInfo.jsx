import React, { useEffect, useState } from 'react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '@/Redux/store';
import { colors, getColor } from '@/utils/utils';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { FiEdit2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { IoLogOut, IoPowerSharp } from 'react-icons/io5';
import { logOutAction } from '@/Redux/Auth/Actions';




const ProfileInfo = () => {
    const { auth } = useSelector(store => store);
    const [image, setImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState(0);
    const navigate = useNavigate();
    const dispatch=useDispatch();


    const logOut = () => {
        dispatch(logOutAction); // Realiza la acción de logout
        console.log("salir");
        navigate("/"); // Navega a la página de inicio
    };

    return ( // Asegúrate de que el return esté aquí
        <div className='absolute bottom-0 h-20 flex items-center justify-between px-10 w-full bg-[#2a2b33]'>
            <div className="flex gap-3 items-center justify-center">
                <div className='w-18 h-18 relative'>
                    <Avatar className='h-12 w-12 rounded-full overflow-hidden'>
                        {image ? (
                            <AvatarImage
                                src={image}
                                className='object-cover w-full h-full bg-black'
                                alt="Avatar"
                            />
                        ) : (
                            <div className={`uppercase h-16 w-16 text-5xl border border-gray-300 flex items-center justify-center rounded-full ${getColor(selectedColor)}`}>
                                {auth.user.fullName ? auth.user.fullName.charAt(0) : ""}
                            </div>
                        )}
                    </Avatar>
                </div>
                <div className="text-purple-500 text-xl font-medium ml-10">
                    {auth.user.fullName ? `${auth.user.fullName.charAt(0).toUpperCase() + auth.user.fullName.slice(1)}` : ""}
                </div>
            </div>

            <div className="flex gap-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <FiEdit2 
                                className="text-purple-500 text-xl font-medium" 
                                onClick={() => navigate('/Profile')} // Asegúrate de que la ruta sea correcta
                            />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#1c1b1e] border-none text-white">
                            Editar Perfil
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <IoLogOut 
                                className="text-red-500 text-xl font-medium" 
                                onClick={logOut} 
                            />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#1c1b1e] border-none text-white">
                            Salir
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
};

export default ProfileInfo;