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
    CardTitle,
  } from "@/components/ui/card";
import { CircleCheck, CircleX, Loader2 } from "lucide-react";


const FormAuth = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async(event) =>  {
        event.preventDefault();
        setLoading(true);
        
        try {
          if (!email || !password) {
            toast({
              title: (
                <div className="flex items-center gap-2">
                  <CircleX className="w-5 h-5 text-white" /> 
                  <span>Email atau Password Tidak boleh kosong !</span>
                </div>
              ),
              variant: "destructive",
              duration: 1500,
              setLoading: false
            });
            setLoading(false);
          } else {
              const response = await fetch(`${import.meta.env.VITE_API}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email, password}),
              });
        
              const data = await response.json();
    
              if (data.accesToken) {
                localStorage.setItem("Token", data.accesToken); 
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
              } else {
                toast({
                  title: (
                    <div className="flex items-center gap-2">
                      <CircleX className="w-5 h-5 text-white" /> 
                      <span>Akun Tidak Terdaftar !</span>
                    </div>
                  ),
                  variant: "destructive",
                  duration: 1500,
                });
                setLoading(false);
              }
          }

        } catch (err) {
          console.error(err);
          toast({
            title: (
              <div className="flex items-center gap-2">
                <CircleX className="w-5 h-5 text-white" /> 
                <span>Terjadi Kesalan Server !</span>
              </div>
            ),
            variant: "destructive",
            duration: 1500,
          });
          setLoading(false);
        }
      };

      const handleShow = () => {
        return(
          setShowPassword(true)
        )
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
                                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}  required />
                            </div> 
                            <div>
                                <Label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Kata Sandi</Label>
                                <Input type={showPassword ? "text" : "password"} placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} required />
                                <button onClick={handleShow}>
                                  klik ini 
                                </button>
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