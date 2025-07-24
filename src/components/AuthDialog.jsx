import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useToast } from '@/components/ui/use-toast.js';

const AuthDialog = ({ isOpen, onOpenChange }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const { login, register } = useAuth();
  const { toast } = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(loginEmail, loginPassword);
    if (result.success) {
      toast({ title: 'Амжилттай нэвтэрлээ!' });
      onOpenChange(false);
    } else {
      toast({ title: 'Нэвтрэхэд алдаа гарлаа', description: result.message, variant: 'destructive' });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const result = register(registerEmail, registerPassword);
    if (result.success) {
      toast({ title: 'Амжилттай бүртгүүллээ!' });
      onOpenChange(false);
    } else {
      toast({ title: 'Бүртгүүлэхэд алдаа гарлаа', description: result.message, variant: 'destructive' });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Нэвтрэх эсвэл Бүртгүүлэх</DialogTitle>
          <DialogDescription>
            Чатаар холбогдохын тулд нэвтэрнэ үү.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Нэвтрэх</TabsTrigger>
            <TabsTrigger value="register">Бүртгүүлэх</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleLogin}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="login-email" className="text-right">
                    И-мэйл
                  </Label>
                  <Input id="login-email" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="login-password" className="text-right">
                    Нууц үг
                  </Label>
                  <Input id="login-password" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="col-span-3" required />
                </div>
              </div>
              <Button type="submit" className="w-full">Нэвтрэх</Button>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={handleRegister}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="register-email" className="text-right">
                    И-мэйл
                  </Label>
                  <Input id="register-email" type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="register-password" className="text-right">
                    Нууц үг
                  </Label>
                  <Input id="register-password" type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} className="col-span-3" required />
                </div>
              </div>
              <Button type="submit" className="w-full">Бүртгүүлэх</Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;