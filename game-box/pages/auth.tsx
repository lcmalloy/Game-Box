import Input from "@/components/Input";
import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router";
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const Auth = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [variant, setVariant] = useState('login')

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });
      router.push('/')
    } catch(error) {
      console.log(error)
    }
  }, [email, password, router])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      })
      login();
    } catch(error) {
      console.log(error)
    }
  }, [email, name, password, login])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero2.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.svg" alt="logo" className="w-48"/>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === 'login' ? 'Sign In' : 'Register'}
              </h2>
              <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  label="email"
                  onChange={(ev:any) => setEmail(ev.target.value)}
                  id="email"
                  type="email"
                  value={email}
                />
              )}
                <Input
                  label="username"
                  onChange={(ev:any) => setName(ev.target.value)}
                  id="username"
                  value={name}
                />
                <Input
                  label="password"
                  onChange={(ev:any) => setPassword(ev.target.value)}
                  id="password"
                  type="password"
                  value={password}
                />
              </div>
              <button className="bg-purple-600 py-3 text-white rounded-md w-full mt-10 hover:bg-purple-900 transition"
              onClick={variant === 'login' ? login : register}
              >
                {variant === 'login' ? 'Login' : 'Sign Up'}
              </button>
              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <FcGoogle size={30}/>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <FaGithub size={30}/>
                </div>
              </div>
              <p className="text-neutral-500 mt-12">
                {variant === 'login' ? 'First time using GameBox?' : 'Already have an account?'}
                <span className="text-white ml-3 hover:underline cursor-pointer" onClick={toggleVariant}>
                  {variant==='login' ? 'Create account' : 'Login'}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Auth;