import Input from "@/components/Input";
import React, { useState, useCallback } from 'react'

const Auth = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

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
                  onChange={(ev:any) => setUsername(ev.target.value)}
                  id="username"
                  value={username}
                />
                <Input
                  label="password"
                  onChange={(ev:any) => setPassword(ev.target.value)}
                  id="password"
                  type="password"
                  value={password}
                />
              </div>
              <button className="bg-purple-600 py-3 text-white rounded-md w-full mt-10 hover:bg-purple-900 transition">
                {variant === 'login' ? 'Login' : 'Sign Up'}
              </button>
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