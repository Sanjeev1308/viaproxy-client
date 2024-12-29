import { Main } from '@/components/layout/main';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheck, HelpCircle, Lightbulb, List } from 'lucide-react';

export default function HowItWorks() {
  return (
    <Main>
      {/* Hero Section */}
      <h1 className="text-2xl font-bold tracking-tight">How It Works</h1>
      <p className="mt-2 text-lg text-gray-600">
        Discover how you can exchange products and services seamlessly with SwapyCampus.
      </p>
      <Button className="my-2">Submit an Offer</Button>

      {/* Steps Section */}
      <div className="py-5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CircleCheck className="h-8 w-8 text-blue-500" />
              <CardTitle className="mt-4 text-lg font-medium">Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Click on "Submit an Offer" and provide detailed information about your exchange.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-green-500" />
              <CardTitle className="mt-4 text-lg font-medium">Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Browse offers from other students to find the perfect match for your needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <List className="h-8 w-8 text-yellow-500" />
              <CardTitle className="mt-4 text-lg font-medium">Step 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Negotiate and finalize the exchange securely within the platform.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <HelpCircle className="h-8 w-8 text-red-500" />
              <CardTitle className="mt-4 text-lg font-medium">Step 4</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Complete the exchange and enjoy the benefits of SwapyCampus.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Examples Section */}
      <div className="py-5">
        <h2 className="text-lg font-bold text-gray-800">Examples</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium text-blue-600">Service for Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Lola offers 4 hours of chemistry tutoring in return for help moving out of her dorm.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium text-green-600">Service for Product</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Frédérique offers cleaning services for one afternoon per week in return for a PC.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium text-yellow-600">Product for Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Julien offers a bed, desk, and wardrobe in return for accommodation in July 2023.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium text-red-600">Product for Product</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Emilie offers a leather jacket worth €80 in return for a microwave.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Main>
  );
}
