import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const FormAuth = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/dashboard');
    }
    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <Card className="shadow w-auto">
                <CardHeader className="text-center my-7 mx-3">
                    <CardTitle>Masukan Akun</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4 md:space-y-6 my-7" onSubmit={handleSubmit}>
                        <div>
                            <Label htmlFor="username"className="block mb-2 text-sm font-medium text-gray-900">Nama Pengguna</Label>
                            <Input type="username" id="username"  placeholder="Masukan Nama" required=""/>
                        </div>
                        <div>
                            <Label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Kata Sandi</Label>
                            <Input type="password" id="password" placeholder="••••••••" required=""/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <Input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <Label for="remember" className="mr-5 text-gray-500 dark:text-gray-300">Ingatkan Saya</Label>
                                </div>
                            </div>
                            <a href="#" className="text-sm ml-5 text-primary-600 hover:underline dark:text-primary-500">Lupa password?</a>
                        </div>
                        <Button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">Masuk</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default FormAuth;