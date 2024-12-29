import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WhatIsYourNeedForm = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="container w-full p-6 bg-white shadow-sm rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">What is your need?</h1>
        <form className="flex gap-2 items-center justify-center">
          {/* Transaction Type */}
          <div className="flex flex-col space-y-2 w-[200px]">
            <Label htmlFor="transactionType">Transaction Type</Label>
            <Select defaultValue="transactionType">
              <SelectTrigger>
                <SelectValue placeholder="Select Transaction Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="exchange">Exchange</SelectItem>
                <SelectItem value="sale">Sale</SelectItem>
                <SelectItem value="gift">Gift</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Type of Requirement */}
          <div className="flex flex-col space-y-2 w-[200px]">
            <Label htmlFor="requirementType">Type of Requirement</Label>
            <Input id="requirementType" placeholder="Product/Service" />
          </div>

          {/* Category */}
          <div className="flex flex-col space-y-2 w-[200px]">
            <Label htmlFor="category">Category</Label>
            <Input id="category" placeholder="Category" />
          </div>

          {/* Subcategory */}
          <div className="flex flex-col space-y-2 w-[200px]">
            <Label htmlFor="subcategory">Subcategory</Label>
            <Input id="subcategory" placeholder="Subcategory" />
          </div>

          {/* Country */}
          <div className="flex flex-col space-y-2 w-[200px]">
            <Label htmlFor="country">Country</Label>
            <Select defaultValue="country">
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="belgium">Belgium</SelectItem>
                <SelectItem value="france">France</SelectItem>
                <SelectItem value="luxembourg">Luxembourg</SelectItem>
                <SelectItem value="romania">Romania</SelectItem>
                <SelectItem value="switzerland">Switzerland</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="mt-4">Go</Button>
        </form>
      </div>
    </div>
  );
};

export default WhatIsYourNeedForm;
