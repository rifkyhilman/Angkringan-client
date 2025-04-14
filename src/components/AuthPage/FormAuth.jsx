import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle } from "@/components/ui/card";
import { 
  CircleCheck, 
  CircleX, 
  Loader2,
  Eye,
  EyeClosed } from "lucide-react";


const FormAuth = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShow = (e) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    };
  

    const handleSubmit = async(event) =>  {
        event.preventDefault();
        setLoading(true);

        try {
          const dataAuth = {
            email: email,
            password: password
          };

          const response = await axios.post(`${import.meta.env.VITE_API}/auth/login`, 
            dataAuth, 
            { headers: { 'Content-Type': 'application/json' }
          });
      
          console.log(response)
          
          if (response.data.accesToken) {
            localStorage.setItem("Token", response.data.accesToken); 
            toast({
              title: (
                <div className="flex items-center gap-2">
                  <CircleCheck className="w-5 h-5 text-white" /> 
                  <span>Login Berhasil !</span> 
                </div>
              ),
              className: "bg-green-500 text-white",
              duration: 1000,
            });
            setTimeout(()=> {
              setLoading(false);
              navigate("/dashboard");
            }, 1000)
          } 
          
        } catch (err) {
          console.error(err);
          toast({
            title: (
              <div className="flex items-center gap-2">
                <CircleX className="w-5 h-5 text-white" /> 
                <span>{err.response.data.message}</span>
              </div>
            ),
            variant: "destructive",
            duration: 1500,
          });
          setLoading(false);
        }
      };

    return (
        <div className="container mx-auto flex justify-center items-center w-full h-screen max-sm:px-[3rem]">
            <Card className="shadow lg:w-[35%] md:w-[60%] max-sm:w-full">
                <CardHeader className="text-center my-7 mx-3">
                    <CardTitle>Masukan Akun</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4 md:space-y-6 my-7">
                            <div>
                                <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</Label>
                                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} autoComplete="username" required />
                            </div> 
                            <div>
                                <Label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Kata Sandi</Label>
                                <div className="relative">
                                  <Input type={showPassword ? "text" : "password"} placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
                                  <button
                                    onClick={handleShow}
                                    type="button"
                                    className="absolute inset-y-0 right-2 flex items-center px-2 text-gray-600"
                                  >
                                    {showPassword ? <Eye/> : <EyeClosed/>}
                                  </button>
                                </div>
                            </div>
                            <div>
                                <a href="#" className="text-sm text-primary-600 hover:underline dark:text-primary-500 max-sm:text-sm">Lupa password?</a>
                            </div>

                        </div>
                        <Button type="submit" className="mt-5 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"  disabled={loading === true}> 
                          {loading && <Loader2 className="animate-spin" />}
                          Masuk
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default FormAuth;