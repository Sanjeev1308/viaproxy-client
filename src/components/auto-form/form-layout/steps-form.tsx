/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import AutoFormObject from '../fields/object';

const Stepper = ({ multiFormInfo, form, dependencies, fieldConfig, renderChildren }: any) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < multiFormInfo.items.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full">
      {/* Stepper Circle Indicators */}
      <div className="flex items-center justify-between mb-4">
        {multiFormInfo.items.map((item: any, index: number) => (
          <div key={index} className={`flex items-center ${index < multiFormInfo.items.length - 1 ? 'w-full' : ''}`}>
            {/* Circle */}
            <div
              className={`p-2 flex items-center justify-center text-white text-sm ${
                index === currentStep ? 'bg-primary' : index < currentStep ? 'bg-green-600' : 'bg-gray-400'
              }`}
            >
              {item.title}
            </div>

            {/* Separator (only if not the last step) */}
            {index < multiFormInfo.items.length - 1 && (
              <div className="mx-2 flex-1">
                <Separator />
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <AutoFormObject
          schema={multiFormInfo.items[currentStep].schema}
          form={form}
          dependencies={dependencies}
          fieldConfig={fieldConfig}
        />
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between mt-4">
        <Button onClick={goToPrevStep} disabled={currentStep === 0}>
          Previous
        </Button>
        {currentStep === multiFormInfo.items.length - 1 ? (
          renderChildren
        ) : (
          <Button onClick={goToNextStep} disabled={currentStep === multiFormInfo.items.length - 1}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
