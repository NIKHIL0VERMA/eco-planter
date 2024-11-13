import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent',
      description: 'We will get back to you soon!',
    });
  };

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-center font-serif text-4xl font-semibold">
          Contact Us
        </h1>
        <p className="mt-4 text-center text-muted-foreground">
          Have a question or special request? We'd love to hear from you.
        </p>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 grid gap-8 text-center sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-xl font-semibold">Visit Our Store</h2>
            <p className="mt-2 text-muted-foreground">
              123 Flower Street
              <br />
              Garden City, GC 12345
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold">Store Hours</h2>
            <p className="mt-2 text-muted-foreground">
              Monday - Friday: 9am - 7pm
              <br />
              Saturday - Sunday: 10am - 6pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;