'use client';

import Typography from '@/components/Typography';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function Sandbox() {
  return (
    <div className='space-y-8 p-6'>
      <Typography variant='h1'>Shadcn UI Full Sandbox</Typography>

      <Button variant='default'>Default Button</Button>

      <Input placeholder='Input Field' />

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>This is card content</CardContent>
      </Card>

      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is an alert description.</AlertDescription>
      </Alert>

      <Badge variant='default'>Badge</Badge>

      <div className='flex items-center gap-2'>
        <Checkbox id='sandbox-checkbox' />
        <Label htmlFor='sandbox-checkbox'>Checkbox Label</Label>
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip content here</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className='flex gap-4'>
        <Switch />
        <Separator orientation='vertical' />
        <Progress value={50} className='w-32' />
      </div>

      <ScrollArea className='h-32 w-full border'>
        <div className='h-64 p-4'>Scrollable content inside</div>
      </ScrollArea>

      <Tabs defaultValue='tab1'>
        <TabsList>
          <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
          <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value='tab1'>Content for Tab 1</TabsContent>
        <TabsContent value='tab2'>Content for Tab 2</TabsContent>
      </Tabs>

      <Avatar>
        <AvatarImage src='/avatar.png' alt='Avatar' />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div>
        <Label htmlFor='slider'>Slider</Label>
        <Slider defaultValue={[30]} max={100} step={1} />
      </div>

      <RadioGroup defaultValue='option1'>
        <div className='flex gap-4'>
          <RadioGroupItem value='option1' id='r1' />
          <Label htmlFor='r1'>Option 1</Label>

          <RadioGroupItem value='option2' id='r2' />
          <Label htmlFor='r2'>Option 2</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
