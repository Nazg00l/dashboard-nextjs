"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import BackButton from "@/components/BackButton";
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { useToast } from "@/components/ui/use-toast";


const formShcema = z.object({
    title: z.string({
        required_error: "Title must have value!"
    }),
    body: z.string({
        required_error: "Body must have value!"
    }),
    author: z.string({
        required_error: "Author must have value!"
    }),
    date: z.string({
        required_error: "Date must have value!"
    }),
});

interface PostEditPageProps {
    params: {
        id: string;
    }
}
const PostEditPage = ({ params }: PostEditPageProps) => {
    const { toast } = useToast();

    const post = posts.find((post) => post.id === params.id);

    // Define the form. 
    const form = useForm<z.infer<typeof formShcema>>({
        resolver: zodResolver(formShcema),
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || '',
        }
    });
    // Define a submit handler
    const onSubmit = (values: z.infer<typeof formShcema>) => {
        toast({
            title: 'Post updated successfully',
            description: `Updated by ${post?.author} on ${post?.date}`,
            duration: 3000,
        });
    }

    return (
        <>
            <BackButton link="/posts" text="Back to Posts" />
            <h3 className="text-2xl mb-4">Edit Post</h3>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Title
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black dark:text-white 
                                        focus-visible:ring-offset-0" placeholder="Enter Title"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Body
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black dark:text-white 
                                        focus-visible:ring-offset-0" placeholder="Enter Body"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Author
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black dark:text-white 
                                        focus-visible:ring-offset-0" placeholder="Enter Author"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Date
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-100 dark:bg-slate-500 border-0 
                                        focus-visible:ring-0 text-black dark:text-white 
                                        focus-visible:ring-offset-0" placeholder="Enter Date"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full dark:*:bg-slate-800 dark:text-white">Update Post</Button>
                </form>
            </Form>
        </>
    );
}

export default PostEditPage;