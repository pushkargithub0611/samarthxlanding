
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import Logo from "@/components/Logo";

const Auth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container flex flex-col items-center justify-center max-w-lg mx-auto">
        <div className="mb-8 animate-float">
          <Logo />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Welcome to SamarthX</h1>
        <p className="text-gray-600 mb-8 text-center">Your platform for school management and collaboration</p>
        <Card className="w-full p-8 shadow-lg bg-white/90 backdrop-blur-sm border border-blue-100">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="font-semibold data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="font-semibold data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Register
              </TabsTrigger>
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
