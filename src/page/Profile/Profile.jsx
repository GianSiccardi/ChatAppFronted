
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import React, { useEffect, useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { FaPlus, FaTrash } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { colors, getColor } from '@/utils/utils';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';



const Profile = () => {

  const { auth } = useSelector(store => store);
  const [fullName, setFullName] = useState("");
  const [hovered, setHovered] = useState(false);
  const [image, setImage] = useState(null)
  const [selectdColor, setSelectedColor] = useState(0)
  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user) { 
      setFullName(auth.user.fullName); 
      setEmail(auth.user.email);
      setPhoneNumber(auth.user.phoneNumber);
    }
  }, [auth.user]);


  const handleUpdateUser = () => {
    const data = {
      email: email,
      fullName: fullName,
      phoneNumber: phoneNumber,
      favoriteColor: selectdColor
    };


    dispatch(updateUser(data));
  };
  return (
    <div className='bg-[#1b1c24] h-screen flex items-center justify-center flex-col gap-10'>
      <div className="flex flex-col gap-10 w-[80vh] md:w-max">
        <div className="">
          <IoArrowBack className='text-4xl lg:text-6xl text-white/90 cursor-pointer' />
        </div>
        <div className="grid grid-cols-2">
          <div className="h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <Avatar className='h-32 w-32 md:w-48 md:h-48 rounded-full overflow-hidden'>
              {image ? (
                <AvatarImage
                  src={image}
                  className='object-cover w-full h-full bg-black'
                  alt="Avatar"
                />
              ) : (
                <div className={`uppercase h-32 w-32 md:w-48 md:h-48 text-5xl border border-gray-300 flex items-center justify-center rounded-full ${getColor(selectdColor)}`}>
                {fullName 
                  ? fullName.charAt(0) 
                  : "" 
                }
              </div>
              )}
            </Avatar>
            {hovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 ring-fuchsia-50 rounded-full">
                {
                  image ? <FaTrash className='text-white text-3xl cursor-pointer' /> : <FaPlus />
                }
              </div>
            )}
            {

            }

          </div>
          <div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-white items-center justify-center">

            <div className="w-full">
              <Input placeholder="Email"
                type="email" disabled value={email}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none" />
            </div>
            <div className="w-full">
              <Input placeholder="FullName"
                type="text" value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-lg p-6 bg-[#2c2e3b] border-none" />
            </div>
            <div className="w-full">
              <Input placeholder="PhoneNumber"
                type="text" value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}

                className="rounded-lg p-6 bg-[#2c2e3b] border-none" />
            </div>

            <div className="w-full flex gap-5">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`${color} h-8 w-8 rounded-full cursor-pointer transition-all duration-300 ${selectdColor === index ? "outline outline-white/50 outline-1" : ""
                    }`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>

          </div>
        </div>
        <div className="w-full">
          <Button className="h-16 w-full bg-purple-700 hover:bg-purple-900 transition-all duration-300" onClick={handleUpdateUser}>
            Guardar Cambios
          </Button>

        </div>
      </div>
    </div>
  );
};


export default Profile;