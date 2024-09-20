
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Auth = () => {
    return (
        <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
            <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] 
                md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">


                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="flex items-center justify-center flex-col">
                        <div className="flex items-center justify-center">
                            <h1 className='text-5xl font-bold md:text-6xl'>
                                ¡Bienvenido!</h1>
                        </div>
                        <p className='font medium text-center'>Crea grupos y chatea con tus amigos!</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <Tabs>
                            <TabsList className="bg-transparent rounded-none w-full">
                                <TabsTrigger
                                    value="login"
                                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full 
               data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 
               p-3 transition-all duration-300"
                                >Login</TabsTrigger>
                                <TabsTrigger
    value="signup"
    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full 
               data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 
               p-3 transition-all duration-300"
>Signup</TabsTrigger>
                            </TabsList>
                            <TabsContent className="" value="login">Make changes to your account here.</TabsContent>
                            <TabsContent className="" value="signup">Make changes to your account here.</TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
