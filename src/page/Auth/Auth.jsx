
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm} from 'react-hook-form';

const Auth = () => {

    const [email, setEmail] = useState("");

   const form=useForm({
    resolver:"",
    defaultValues:{
        fullName:"",
        email:"",
        phoneNumber:"",
        password:""

    }
   })


    return (
        <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
            <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] 
                md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl  flex items-center justify-center">

                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="flex items-center justify-center flex-col">
                        <div className="flex items-center justify-center">
                            <h1 className='text-5xl font-bold md:text-6xl'>
                                ¡Bienvenido!
                            </h1>
                        </div>
                        {/* Agregar margen inferior para mejor separación */}
                        <p className='font-medium text-center mt-4'>Crea grupos y chatea con tus amigos!</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <Tabs>
                            <TabsList className="bg-transparent rounded-none w-full">
                                <TabsTrigger
                                    value="login"
                                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full 
                                    data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 
                                    p-3 transition-all duration-300"
                                >
                                    Login
                                </TabsTrigger>
                                <TabsTrigger
                                    value="signup"
                                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full 
                                    data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 
                                    p-3 transition-all duration-300"
                                >
                                    Signup
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    className="rounded-full p-6 border-purple-500 focus:border-black"
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <Input
                                    placeholder="Password"
                                    type="password"
                                    className="rounded-full p-6 border-purple-500 focus:border-black"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </TabsContent>
                          
                            <TabsContent className="flex flex-col gap-5 " value="signup">
                                <Input
                                    placeholder="FullName"
                                    type="text"
                                    className="rounded-full p-6 border-purple-500 focus:border-black"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    className="rounded-full p-6 border-purple-500 focus:border-black" 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    placeholder="Phone"
                                    type="text"
                                    className="rounded-full p-6 border-purple-500 focus:border-black"
                                     onChange={(e) => setEmail(e.target.value)}
                                />


                                <Input
                                    placeholder="Password"
                                    type="password"
                                    className="rounded-full p-6 border-purple-500 focus:border-black" 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                   <Button className="rounded-full p-6" >SignUp</Button>

                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
