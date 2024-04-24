// import { Button } from '@/src/components/ui/button'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { UserPlus } from 'lucide-react'


export function LoginPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
     
      <Card className='w-full max-w-sm'>
        <CardHeader className='flex justify-center items-center'>
        <div className='mx-auto flex flex-col justify-center space-y-6'>
          <div className='flex flex-col space-y-2 items-center'>
            <div className='w-20 h-20 p-0.5 bg-gradient-to-b from-zinc-200 via-stone-50 to-zinc-50 rounded-full'>
              <div className='w-full h-full p-3 bg-gradient-to-b from-zinc-100 via-stone-50 to-zinc-50 rounded-full  justify-start items-center  inline-flex'>
                  <div className='p-3.5 bg-white rounded-full shadow border border-zinc-200 justify-center items-center text-secondary-foreground'>
                      <UserPlus />
                  </div>
              </div>
            </div>
          </div>
          </div>
          <CardTitle className='text-2xl'>Iniciar Sesión</CardTitle>
          <CardDescription>
          Inicia sesión en tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Correo Electrónico</Label>
            <Input id='email' type='email' placeholder='m@example.com' required />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Contraseña</Label>
            <Input id='password' type='password' required />
          </div>
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <Button className='w-full'>Iniciar Sesión</Button>
          <div className='inline-flex justify-between w-full'>
            <div className='inline-flex gap-2 items-center'>
                <Checkbox />
                <span className='text-xs font-medium'>Mantener sesión</span>
            </div>
            <Button 
                variant='link'
                size='sm'
            > Olvidaste tu contraseña?</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}


