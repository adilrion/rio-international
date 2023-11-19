import { useState } from "react";
import { Layout } from "@/layout/Layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { assets } from "@/assets";
import { Eye, EyeOff } from "lucide-react";
import { authZodSchema } from "./auth.zodSchema";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [seePassword, setSeePassword] = useState(false);

    const { formSchema } = authZodSchema;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        // Handle form submission here
        console.log(data);
    };

    return (
        <Layout>
            <section>
                <div className="w-fit mx-auto py-10">
                    <div className="text-gray-600 font-bold">
                        <h1 className="text-3xl">
                            Welcome to rio international! Please login.
                        </h1>
                    </div>
                    <div className="mt-5 flex shadow w-fit justify-center items-center rounded overflow-hidden">
                        <div className="w-[420px] h-full">
                            <img
                                src={assets.regImgage}
                                className="w-full h-full object-cover"
                                alt="Login page"
                            />
                        </div>

                        <div className="w-[420px] p-5 md:p-10">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-5"
                                >
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your Full Name"
                                                        type="text"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Number</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Phone Number"
                                                        type="number"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Write Email address"
                                                        type="email"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem className="relative">
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="password"
                                                        type={
                                                            seePassword
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        {...field}
                                                    ></Input>
                                                </FormControl>
                                                {seePassword ? (
                                                    <Eye
                                                        onClick={() =>
                                                            setSeePassword(
                                                                !true
                                                            )
                                                        }
                                                        size={20}
                                                        strokeWidth={1.5}
                                                        className="absolute right-2 top-[44px] -translate-y-2/4 text-gray-500"
                                                    />
                                                ) : (
                                                    <EyeOff
                                                        onClick={() =>
                                                            setSeePassword(
                                                                !false
                                                            )
                                                        }
                                                        size={20}
                                                        strokeWidth={1.5}
                                                        className="absolute right-2 top-[44px] -translate-y-2/4 text-gray-500"
                                                    />
                                                )}

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form>
                            <div className="mt-4">
                                <Link
                                    to="/login"
                                    className="text-gray-700 text-sm"
                                >
                                   al ready Registered? Login here
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SignUp;
