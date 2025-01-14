/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import AutoFormCustomSelect from '@/components/auto-form/fields/custom-select';
import { DependencyType } from '@/components/auto-form/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductDropdown from '@/features/dropdowns/components/product-dropdown';
import ServiceDropdown from '@/features/dropdowns/components/service-dropdown';
import { proposedItemsOptions } from '@/features/exchanges/data/submit-an-offer';
import { useState } from 'react';
import { offerFormSchema } from '../data/exchange-form-schema';

export default function ExchangeOfferForm({ values, handleOnSubmit, isLoading }: any) {
  const [proposedItem, setProposedItem] = useState(values?.proposedItem || 'service');

  const handleChange = (value: any) => {
    setProposedItem(value.proposedItem);
  };

  return (
    <AutoForm
      formSchema={offerFormSchema}
      values={values}
      onValuesChange={handleChange}
      onSubmit={handleOnSubmit}
      fieldConfig={{
        proposedItem: {
          renderParent({ children }: any) {
            return <AutoFormCustomSelect selectOptions={proposedItemsOptions} {...children.props} />;
          },
        },
        concernedProductService: {
          renderParent({ children }: any) {
            if (proposedItem === 'service') {
              return <ServiceDropdown {...children.props} />;
            }
            return <ProductDropdown {...children.props} />;
          },
        },
        grantRightToWithdraw: {
          fieldType: 'radio',
          renderParent({ children }) {
            return (
              <Card className="shadow-sm bg-red-100">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Important Notice</CardTitle>
                  <CardDescription>
                    We draw your attention to the fact that it is strictly forbidden to offer or purchase a product:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>
                      Which does not belong to the seller or whose owner has not expressly mandated the seller to act in
                      his place,
                    </li>
                    <li>
                      Which is counterfeit. To this end, we invite you to add or verify all the elements that can prove:
                    </li>
                  </ul>
                  <p className="mt-4">
                    The ownership and authenticity of the product offered or desired You are also asked to specify
                    whether you grant or require a right of withdrawal.
                    <br />
                    In the absence of precision, the buyer will not benefit from a right of withdrawal and will not be
                    able to request a refund or exchange of the good or service offered.
                  </p>
                  <p className="mt-4">
                    You are also asked to specify whether you grant or require a right of withdrawal. In the absence of
                    precision, the buyer will not benefit from a right of withdrawal and will not be able to request a
                    refund or exchange of the good or service offered.
                  </p>

                  <div className="pt-2">{children}</div>
                </CardContent>
              </Card>
            );
          },
        },
        description: {
          fieldType: 'textarea',
        },
        offerImage: {
          fieldType: 'file',
        },
        offerStartDate: { inputProps: { className: 'w-[48%]' } },
        offerEndDate: { inputProps: { className: 'w-[48%]' } },
        exchangeType: { inputProps: { className: 'w-[48%]' } },
        paymentType: { inputProps: { className: 'w-[48%]' } },
        estimatedPrice: { inputProps: { className: 'w-[48%]' } },
        paymentMethod: { inputProps: { className: 'w-[48%]' } },
        geographicArea: { inputProps: { className: 'w-[48%]' } },
        city: { inputProps: { className: 'w-[48%]' } },
        campus: { inputProps: { className: 'w-[48%]' } },
        specialConditionsFile: {
          fieldType: 'file',
        },
        deliveryTermsDescription: {
          fieldType: 'textarea',
        },
      }}
      dependencies={[
        {
          sourceField: 'proposedItem',
          type: DependencyType.HIDES,
          targetField: 'description',
          when: (proposedItem) => proposedItem === 'buy',
        },
        {
          sourceField: 'proposedItem',
          type: DependencyType.HIDES,
          targetField: 'concernedProductService',
          when: (proposedItem) => proposedItem === 'buy',
        },
        {
          sourceField: 'proposedItem',
          type: DependencyType.HIDES,
          targetField: 'grantRightToWithdraw',
          when: (proposedItem) => proposedItem === 'service' || proposedItem === 'buy',
        },
        // {
        //   sourceField: "age",
        //   type: DependencyType.REQUIRES,
        //   targetField: "parentsAllowed",
        //   when: (age) => age < 18,
        // },
        // {
        //   sourceField: "vegetarian",
        //   type: DependencyType.SETS_OPTIONS,
        //   targetField: "mealOptions",
        //   when: (vegetarian) => vegetarian,
        //   options: ["Pasta", "Salad"],
        // },
      ]}
    >
      <AutoFormSubmit disabled={isLoading}>Submit</AutoFormSubmit>
    </AutoForm>
  );
}
