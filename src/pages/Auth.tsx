
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import Logo from "@/components/Logo";

const Auth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20 pb-8">
      <div className="container flex flex-col items-center justify-center">
        <div className="mb-8">
          <Logo />
        </div>
        <Card className="w-full max-w-lg p-8 shadow-lg bg-white/80 backdrop-blur-sm">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="font-semibold">Login</TabsTrigger>
              <TabsTrigger value="register" className="font-semibold">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
