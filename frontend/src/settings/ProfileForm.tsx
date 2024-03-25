"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
   
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 3 characters.",
    }),
    confirmpassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    newpassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    oldpassword: z.string().min(8, {
        message: "Password must match your old password.",
    }),
})

export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            newpassword: "",
            confirmpassword: "",
            oldpassword: "",
        },
    })
 
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input className="w-96" placeholder="Username" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
              
                    )}
                />

                <FormField
                    control={form.control}
                    name="oldpassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Old Password</FormLabel>
                            <FormControl>
                                <Input className="w-96" placeholder="Old Password" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your old password to confirm changes.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
              
                    )}
                />

                <FormField
                    control={form.control}
                    name="newpassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                                <Input className="w-96" placeholder="New Password" {...field} />
                            </FormControl>
                            <FormDescription>
                                Password must be at least 8 characters.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
              
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmpassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm New Password</FormLabel>
                            <FormControl>
                                <Input className="w-96" placeholder="New Password" {...field} />
                            </FormControl>
                            <FormDescription>
                                Password must match.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="mb-5">
                    <div className="mb-2">Enter your profile description</div>
                        <Textarea className="w-[32rem]" />
                </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
}


export default ProfileForm;