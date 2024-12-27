import { Main } from '@/components/layout/main';
import { Button } from '@/components/ui/button';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CheckedState } from '@radix-ui/react-checkbox';
import { useState } from 'react';

export default function SubmitOffer() {
  const [isTermAndConditionChecked, setIsTermAndConditionChecked] = useState<CheckedState>(false);

  return (
    <Main>
      <h1 className="text-2xl font-bold tracking-tight">Submit Your Offer</h1>

      <div className="my-5">
        <Card>
          <CardHeader>
            <CardTitle className="mt-4 text-lg font-medium">
              Finance your investment or spending projects with your unused assets! You can enter one or more offers on
              the exchange platform. These offers are geolocated to be transmitted to registered students on all partner
              campuses!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              You can enter one or more offers on the exchange platform. These offers are geolocated to be transmitted
              to registered students on all partner campuses! Before starting to publish your offer, you confirm that
              you have read and accepted the general conditions of use and sale of SwapyCampus.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="terms"
                  checked={isTermAndConditionChecked}
                  onCheckedChange={setIsTermAndConditionChecked}
                />

                <Label htmlFor="terms" className="text-sm text-gray-700">
                  I confirm that I have read and accepted the terms of use and your privacy policy. By registering, you
                  confirm that you accept our terms of use and our privacy policy.
                </Label>
              </div>

              <div>
                <Button disabled={!isTermAndConditionChecked}>Submit an offer</Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Main>
  );
}
