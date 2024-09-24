
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login, register } from '@/Redux/Auth/Actions';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const Auth = () => {

    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const schema = yup.object().shape({
        fullName: yup.string().required("El nombre completo es obligatorio"),
        email: yup.string().email("El email no es válido").required("El email es obligatorio"),
        phoneNumber: yup.string().required("El número de teléfono es obligatorio"),
        password: yup.string().required("La contraseña es obligatoria"),
    });
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            password: ""
        }
    });

    const formLogin=useForm({
        defaultValues:{
            email:"",
            password:""
        }
    }) 

    const onSubmit = (data) => {
        dispatch(register(data));
        navigate("/Chat")
    }

    const onSubmitLogin = async (data) => {
        dispatch(login(data)); 
        navigate("/Chat");
    };


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
                            <form  className="flex flex-col gap-5" onSubmit={formLogin.handleSubmit(onSubmitLogin)}>

                                <Input
                                    placeholder="Email"
                                    type="email"
                                    className="rounded-full p-6 border-purple-500 focus:border-black"
                                    {...formLogin.register("email")} />
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    className="rounded-full p-6 border-purple-500 focus:border-black"
                                   
                                    {...formLogin.register("password")}
                                />
                               <Button className="rounded-full p-6 bg-purple-700"  type="submit">Login</Button>
                             </form>
                            </TabsContent>

                            <TabsContent className="flex flex-col gap-5 " value="signup">
                                <form  className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                                    <Input
                                        placeholder="FullName"
                                        type="text"
                                        className="rounded-full p-6 border-purple-500 focus:border-black"
                                        {...form.register("fullName")}
                                    />
                                    {form.formState.errors.fullName && (
                                        <p className="text-red-500">{form.formState.errors.fullName.message}</p>
                                    )}
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        className="rounded-full p-6 border-purple-500 focus:border-black"
                                        {...form.register("email")}
                                    />
                                    {form.formState.errors.email && (
                                        <p className="text-red-500">{form.formState.errors.email.message}</p>
                                    )}
                                    <Input
                                        placeholder="Phone"
                                        type="text"
                                        className="rounded-full p-6 border-purple-500 focus:border-black"
                                        {...form.register("phoneNumber")}
                                    />
                                    {form.formState.errors.phoneNumber && (
                                        <p className="text-red-500">{form.formState.errors.phoneNumber.message}</p>
                                    )}


                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        className="rounded-full p-6 border-purple-500 focus:border-black"
                                        {...form.register("password")}
                                        />
                                        {form.formState.errors.password && (
                                          <p className="text-red-500">{form.formState.errors.password.message}</p>
                                        )}
                                    <Button className="rounded-full p-6 bg-purple-700" type="submit" >SignUp</Button>
                                </form>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
