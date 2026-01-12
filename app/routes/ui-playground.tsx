// uncomment all of this after running `bun run install:components`

// import { useMemo } from "react";

// import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
// import {
//   AlertDialog,
//   AlertDialogClose,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "~/components/ui/alert-dialog";
// import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
// import { Badge } from "~/components/ui/badge";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "~/components/ui/breadcrumb";
// import { Button } from "~/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "~/components/ui/card";
// import { Checkbox } from "~/components/ui/checkbox";
// import { CheckboxGroup } from "~/components/ui/checkbox-group";
// import {
//   Collapsible,
//   CollapsiblePanel,
//   CollapsibleTrigger,
// } from "~/components/ui/collapsible";
// import {
//   Command,
//   CommandDialogPopup,
//   CommandDialog,
//   CommandDialogTrigger,
//   CommandEmpty,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "~/components/ui/command";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "~/components/ui/dialog";
// import { Empty, EmptyDescription, EmptyTitle } from "~/components/ui/empty";
// import { Field, FieldDescription, FieldLabel } from "~/components/ui/field";
// import { Fieldset, FieldsetLegend } from "~/components/ui/fieldset";
// import { Form } from "~/components/ui/form";
// import {
//   Frame,
//   FrameDescription,
//   FrameFooter,
//   FrameHeader,
//   FramePanel,
//   FrameTitle,
// } from "~/components/ui/frame";
// import { Group, GroupSeparator } from "~/components/ui/group";
// import { Input } from "~/components/ui/input";
// import { InputGroup, InputGroupAddon } from "~/components/ui/input-group";
// import { Kbd } from "~/components/ui/kbd";
// import { Label } from "~/components/ui/label";
// import {
//   Menu,
//   MenuItem,
//   MenuPopup,
//   MenuSeparator,
//   MenuTrigger,
// } from "~/components/ui/menu";
// import { Meter, MeterIndicator, MeterTrack } from "~/components/ui/meter";
// import {
//   NumberField,
//   NumberFieldDecrement,
//   NumberFieldGroup,
//   NumberFieldIncrement,
//   NumberFieldInput,
// } from "~/components/ui/number-field";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "~/components/ui/pagination";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "~/components/ui/popover";
// import {
//   PreviewCard,
//   PreviewCardPopup,
//   PreviewCardTrigger,
// } from "~/components/ui/preview-card";
// import { Progress } from "~/components/ui/progress";
// import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
// import { ScrollArea } from "~/components/ui/scroll-area";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "~/components/ui/select";
// import { Separator } from "~/components/ui/separator";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetPanel,
//   SheetTitle,
//   SheetTrigger,
// } from "~/components/ui/sheet";
// import { Skeleton } from "~/components/ui/skeleton";
// import { Slider } from "~/components/ui/slider";
// import { Spinner } from "~/components/ui/spinner";
// import { Switch } from "~/components/ui/switch";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "~/components/ui/table";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
// import { Textarea } from "~/components/ui/textarea";
// import { Toggle } from "~/components/ui/toggle";
// import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
// import {
//   Toolbar,
//   ToolbarButton,
//   ToolbarGroup,
//   ToolbarInput,
//   ToolbarSeparator,
// } from "~/components/ui/toolbar";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "~/components/ui/tooltip";

// // import { type Route } from "./+types/ui-playground";

// export function meta() {
//   return [
//     { title: "UI Playground - Novel Guard" },
//     { content: "Component showcase for Novel Guard", name: "description" },
//   ];
// }

// interface CategoryWithComponents {
//   name: string;
//   components: { name: string; component: React.ReactNode }[];
// }

// interface CategoryWithSingleComponent {
//   name: string;
//   component: React.ReactNode;
//   components?: undefined;
// }

// const items = [
//   { label: "Linear", value: "linear" },
//   { label: "Figma", value: "figma" },
//   { label: "Slack", value: "slack" },
// ];

// const componentCategories: (
//   | CategoryWithComponents
//   | CategoryWithSingleComponent
// )[] = [
//   {
//     components: [
//       {
//         component: (
//           <div className="flex flex-wrap gap-3">
//             <Button variant="default">Default</Button>
//             <Button variant="secondary">Secondary</Button>
//             <Button variant="destructive">Destructive</Button>
//             <Button variant="outline">Outline</Button>
//             <Button variant="ghost">Ghost</Button>
//             <Button variant="link">Link</Button>
//           </div>
//         ),
//         name: "Button",
//       },
//       {
//         component: (
//           <div className="flex flex-wrap items-center gap-3">
//             <Button size="xs">XS</Button>
//             <Button size="sm">SM</Button>
//             <Button size="default">Default</Button>
//             <Button size="lg">LG</Button>
//             <Button size="icon-xs">☀</Button>
//             <Button size="icon-sm">☀</Button>
//             <Button size="icon">☀</Button>
//             <Button size="icon-lg">☀</Button>
//             <Button size="icon-xl">☀</Button>
//           </div>
//         ),
//         name: "Button Sizes",
//       },
//       {
//         component: (
//           <div className="flex flex-wrap gap-3">
//             <Toggle>Toggle</Toggle>
//             <Toggle variant="outline">Outline</Toggle>
//           </div>
//         ),
//         name: "Toggle",
//       },
//       {
//         component: (
//           <ToggleGroup defaultValue={["left"]}>
//             <ToggleGroupItem value="left">Left</ToggleGroupItem>
//             <ToggleGroupItem value="center">Center</ToggleGroupItem>
//             <ToggleGroupItem value="right">Right</ToggleGroupItem>
//           </ToggleGroup>
//         ),
//         name: "ToggleGroup",
//       },
//       {
//         component: (
//           <div className="flex flex-wrap items-center gap-4">
//             <Switch defaultChecked />
//             <Switch />
//             <Switch disabled />
//           </div>
//         ),
//         name: "Switch",
//       },
//       {
//         component: (
//           <div className="w-full max-w-xs">
//             <Slider defaultValue={[50]} max={100} step={1} />
//           </div>
//         ),
//         name: "Slider",
//       },
//       {
//         component: (
//           <Group>
//             <Button>Copy</Button>
//             <Button>Cut</Button>
//             <GroupSeparator />
//             <Button>Paste</Button>
//           </Group>
//         ),
//         name: "Group",
//       },
//       {
//         component: (
//           <Toolbar>
//             <ToolbarGroup>
//               <ToolbarButton render={<b>B</b>} />
//               <ToolbarButton render={<i>I</i>} />
//               <ToolbarButton render={<u>U</u>} />
//             </ToolbarGroup>
//             <ToolbarSeparator />
//             <ToolbarGroup>
//               <ToolbarInput placeholder="Search..." className="w-32" />
//             </ToolbarGroup>
//           </Toolbar>
//         ),
//         name: "Toolbar",
//       },
//     ],
//     name: "Actions",
//   },
//   {
//     components: [
//       {
//         component: (
//           <div className="w-full max-w-sm space-y-3">
//             <Input placeholder="Text input" />
//             <Input type="email" placeholder="Email input" />
//             <Input type="password" placeholder="Password" />
//           </div>
//         ),
//         name: "Input",
//       },
//       {
//         component: (
//           <Textarea
//             placeholder="Type your message here."
//             className="w-full max-w-sm"
//           />
//         ),
//         name: "Textarea",
//       },
//       {
//         component: (
//           <div className="flex w-full max-w-sm flex-col gap-2">
//             <Label htmlFor="email2">Email</Label>
//             <Input id="email2" placeholder="Enter your email" />
//           </div>
//         ),
//         name: "Label",
//       },
//       {
//         component: (
//           <Field className="w-full max-w-sm">
//             <FieldLabel>Username</FieldLabel>
//             <Input placeholder="Enter username" />
//             <FieldDescription>
//               This is your public display name.
//             </FieldDescription>
//           </Field>
//         ),
//         name: "Field",
//       },
//       {
//         component: (
//           <Fieldset className="w-full max-w-sm">
//             <FieldsetLegend>Personal Information</FieldsetLegend>
//             <div className="mt-2 space-y-3">
//               <Input placeholder="First name" />
//               <Input placeholder="Last name" />
//             </div>
//           </Fieldset>
//         ),
//         name: "Fieldset",
//       },
//       {
//         component: (
//           <Form className="w-full max-w-sm space-y-3">
//             <Input placeholder="Name" />
//             <Input type="email" placeholder="Email" />
//             <Button type="submit">Submit</Button>
//           </Form>
//         ),
//         name: "Form",
//       },
//       {
//         component: (
//           <div className="flex flex-col gap-2">
//             <Checkbox id="terms2" defaultChecked />
//             <Checkbox id="marketing2" />
//             <Checkbox id="disabled2" disabled />
//           </div>
//         ),
//         name: "Checkbox",
//       },
//       {
//         component: (
//           <CheckboxGroup defaultValue={["apple", "banana"]}>
//             <div className="flex flex-col gap-2">
//               <label className="flex items-center gap-2">
//                 <Checkbox value="apple" /> Apple
//               </label>
//               <label className="flex items-center gap-2">
//                 <Checkbox value="banana" /> Banana
//               </label>
//               <label className="flex items-center gap-2">
//                 <Checkbox value="cherry" /> Cherry
//               </label>
//             </div>
//           </CheckboxGroup>
//         ),
//         name: "CheckboxGroup",
//       },
//       {
//         component: (
//           <RadioGroup defaultValue="option-1">
//             <div className="flex items-center gap-2">
//               <RadioGroupItem value="option-1" id="r1b" />
//               <Label htmlFor="r1b">Option 1</Label>
//             </div>
//             <div className="flex items-center gap-2">
//               <RadioGroupItem value="option-2" id="r2b" />
//               <Label htmlFor="r2b">Option 2</Label>
//             </div>
//           </RadioGroup>
//         ),
//         name: "RadioGroup",
//       },
//       {
//         component: (
//           <Select>
//             <SelectTrigger className="w-full max-w-xs">
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="option-1">Option 1</SelectItem>
//               <SelectItem value="option-2">Option 2</SelectItem>
//               <SelectItem value="option-3">Option 3</SelectItem>
//             </SelectContent>
//           </Select>
//         ),
//         name: "Select",
//       },
//       {
//         component: (
//           <Select>
//             <SelectTrigger className="w-full max-w-xs">
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="option-1">Option 1</SelectItem>
//               <SelectItem value="option-2">Option 2</SelectItem>
//               <SelectItem value="option-3">Option 3</SelectItem>
//             </SelectContent>
//           </Select>
//         ),
//         name: "NumberField",
//       },
//       {
//         component: (
//           <NumberField className="w-full max-w-xs">
//             <NumberFieldGroup>
//               <NumberFieldDecrement />
//               <NumberFieldInput />
//               <NumberFieldIncrement />
//             </NumberFieldGroup>
//           </NumberField>
//         ),
//         name: "NumberField",
//       },
//       {
//         component: (
//           <div className="w-full max-w-xs space-y-3">
//             <Meter value={25}>
//               <MeterTrack>
//                 <MeterIndicator />
//               </MeterTrack>
//             </Meter>
//             <Meter value={50}>
//               <MeterTrack>
//                 <MeterIndicator />
//               </MeterTrack>
//             </Meter>
//             <Meter value={75}>
//               <MeterTrack>
//                 <MeterIndicator />
//               </MeterTrack>
//             </Meter>
//           </div>
//         ),
//         name: "Meter",
//       },
//       {
//         component: (
//           <InputGroup className="w-full max-w-xs">
//             <InputGroupAddon align="inline-start">https://</InputGroupAddon>
//             <Input placeholder="example.com" />
//             <InputGroupAddon align="inline-end">.com</InputGroupAddon>
//           </InputGroup>
//         ),
//         name: "InputGroup",
//       },
//     ],
//     name: "Form",
//   },
//   {
//     components: [
//       {
//         component: (
//           <div className="flex flex-wrap gap-2">
//             <Badge>Default</Badge>
//             <Badge variant="secondary">Secondary</Badge>
//             <Badge variant="outline">Outline</Badge>
//             <Badge variant="destructive">Destructive</Badge>
//           </div>
//         ),
//         name: "Badge",
//       },
//       {
//         component: (
//           <div className="flex items-center gap-3">
//             <Avatar>
//               <AvatarImage
//                 src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&dpr=2&q=80"
//                 alt="User"
//               />
//               <AvatarFallback>JD</AvatarFallback>
//             </Avatar>
//             <Avatar>
//               <AvatarImage
//                 src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&dpr=2&q=80"
//                 alt="User"
//               />
//               <AvatarFallback>AB</AvatarFallback>
//             </Avatar>
//             <Avatar>
//               <AvatarFallback>MK</AvatarFallback>
//             </Avatar>
//           </div>
//         ),
//         name: "Avatar",
//       },
//       {
//         component: (
//           <div className="w-full max-w-xs space-y-3">
//             <Progress value={33} />
//             <Progress value={66} />
//             <Progress value={100} />
//           </div>
//         ),
//         name: "Progress",
//       },
//       {
//         component: (
//           <div className="flex items-center gap-3">
//             <Skeleton className="size-10 rounded-full" />
//             <div className="space-y-2">
//               <Skeleton className="h-4 w-[200px]" />
//               <Skeleton className="h-4 w-[150px]" />
//             </div>
//           </div>
//         ),
//         name: "Skeleton",
//       },
//       {
//         component: (
//           <div className="flex items-center gap-4">
//             <Spinner />
//             <Spinner size="lg" />
//             <Spinner className="text-primary" />
//           </div>
//         ),
//         name: "Spinner",
//       },
//       {
//         component: (
//           <Empty className="w-full max-w-xs">
//             <EmptyTitle>No items found</EmptyTitle>
//             <EmptyDescription>
//               Try adjusting your search criteria.
//             </EmptyDescription>
//           </Empty>
//         ),
//         name: "Empty",
//       },
//       {
//         component: (
//           <Frame className="w-full max-w-sm">
//             <FramePanel>
//               <FrameHeader>
//                 <FrameTitle>Frame Title</FrameTitle>
//                 <FrameDescription>
//                   A frame component for grouping content.
//                 </FrameDescription>
//               </FrameHeader>
//               <div className="mt-4">Frame content goes here.</div>
//               <FrameFooter>
//                 <Button size="sm">Action</Button>
//               </FrameFooter>
//             </FramePanel>
//           </Frame>
//         ),
//         name: "Frame",
//       },
//     ],
//     name: "Display",
//   },
//   {
//     components: [
//       {
//         component: (
//           <div className="w-full max-w-md space-y-3">
//             <Alert>
//               <AlertTitle>Heads up!</AlertTitle>
//               <AlertDescription>
//                 You can add components to your app using the cli.
//               </AlertDescription>
//             </Alert>
//             <Alert variant="error">
//               <AlertTitle>Error</AlertTitle>
//               <AlertDescription>
//                 Something went wrong. Please try again.
//               </AlertDescription>
//             </Alert>
//           </div>
//         ),
//         name: "Alert",
//       },
//       {
//         component: (
//           <AlertDialog>
//             <AlertDialogTrigger render={<Button variant="outline" />}>
//               Open Dialog
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//               <AlertDialogHeader>
//                 <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//                 <AlertDialogDescription>
//                   This action cannot be undone.
//                 </AlertDialogDescription>
//               </AlertDialogHeader>
//               <AlertDialogFooter>
//                 <AlertDialogClose render={<Button variant="outline" />}>
//                   Cancel
//                 </AlertDialogClose>
//                 <AlertDialogClose render={<Button />}>
//                   Continue
//                 </AlertDialogClose>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialog>
//         ),
//         name: "AlertDialog",
//       },
//       {
//         component: (
//           <div className="flex flex-wrap items-center gap-2">
//             <Kbd>⌘</Kbd>
//             <Kbd>⇧</Kbd>
//             <Kbd>⌥</Kbd>
//             <Kbd>⌃</Kbd>
//             <Kbd>K</Kbd>
//             <div className="flex items-center gap-1 text-sm text-muted-foreground">
//               Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search
//             </div>
//           </div>
//         ),
//         name: "Kbd",
//       },
//       {
//         component: (
//           <Table className="w-full max-w-md">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Role</TableHead>
//                 <TableHead>Status</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>John Doe</TableCell>
//                 <TableCell>Developer</TableCell>
//                 <TableCell>
//                   <Badge variant="secondary">Active</Badge>
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Jane Smith</TableCell>
//                 <TableCell>Designer</TableCell>
//                 <TableCell>
//                   <Badge variant="secondary">Active</Badge>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         ),
//         name: "Table",
//       },
//     ],
//     name: "Feedback",
//   },
//   {
//     components: [
//       {
//         component: (
//           <Tabs defaultValue="account" className="w-full max-w-sm">
//             <TabsList>
//               <TabsTrigger value="account">Account</TabsTrigger>
//               <TabsTrigger value="password">Password</TabsTrigger>
//             </TabsList>
//             <TabsContent value="account">Account settings content.</TabsContent>
//             <TabsContent value="password">
//               Password settings content.
//             </TabsContent>
//           </Tabs>
//         ),
//         name: "Tabs",
//       },
//       {
//         component: (
//           <Pagination className="w-full max-w-sm">
//             <PaginationContent>
//               <PaginationItem>
//                 <PaginationPrevious />
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink>1</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink>2</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink>3</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationEllipsis />
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationNext />
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         ),
//         name: "Pagination",
//       },
//       {
//         component: (
//           <Breadcrumb className="w-full max-w-sm">
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="#">Home</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="#">Docs</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbPage>Components</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         ),
//         name: "Breadcrumb",
//       },
//       {
//         component: (
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger render={<Button variant="outline" size="sm" />}>
//                 Hover me
//               </TooltipTrigger>
//               <TooltipContent>This is a tooltip</TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         ),
//         name: "Tooltip",
//       },
//       {
//         component: (
//           <Menu>
//             <MenuTrigger render={<Button />}>Open Menu</MenuTrigger>
//             <MenuPopup>
//               <MenuItem>New File</MenuItem>
//               <MenuItem>Open Recent</MenuItem>
//               <MenuSeparator />
//               <MenuItem>Copy</MenuItem>
//               <MenuItem>Paste</MenuItem>
//             </MenuPopup>
//           </Menu>
//         ),
//         name: "Menu",
//       },
//     ],
//     name: "Navigation",
//   },
//   {
//     components: [
//       {
//         component: (
//           <Card className="w-full max-w-sm">
//             <CardHeader>
//               <CardTitle>Card Title</CardTitle>
//               <CardDescription>Card description goes here.</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-muted-foreground">
//                 Card content area with some sample text.
//               </p>
//             </CardContent>
//           </Card>
//         ),
//         name: "Card",
//       },
//       {
//         component: (
//           <div className="w-full max-w-xs space-y-2">
//             <p>Above separator</p>
//             <Separator />
//             <p>Below separator</p>
//           </div>
//         ),
//         name: "Separator",
//       },
//       {
//         component: (
//           <ScrollArea className="h-32 w-full max-w-xs rounded-lg border">
//             <div className="space-y-2 p-4">
//               <p>Scrollable content...</p>
//               {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                 <p key={i} className="text-sm text-muted-foreground">
//                   Line {i}
//                 </p>
//               ))}
//             </div>
//           </ScrollArea>
//         ),
//         name: "ScrollArea",
//       },
//       {
//         component: (
//           <Collapsible className="w-full max-w-xs space-y-2">
//             <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
//               Toggle Content
//             </CollapsibleTrigger>
//             <CollapsiblePanel>
//               <div className="rounded-lg border p-4">
//                 This is collapsible content that can be shown or hidden.
//               </div>
//             </CollapsiblePanel>
//           </Collapsible>
//         ),
//         name: "Collapsible",
//       },
//     ],
//     name: "Layout",
//   },
//   {
//     components: [
//       {
//         component: (
//           <Dialog>
//             <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Dialog Title</DialogTitle>
//                 <DialogDescription>
//                   This is a dialog component with a description.
//                 </DialogDescription>
//               </DialogHeader>
//               <DialogFooter>
//                 <DialogClose render={<Button variant="outline" />}>
//                   Cancel
//                 </DialogClose>
//                 <DialogClose render={<Button />}>Confirm</DialogClose>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         ),
//         name: "Dialog",
//       },
//       {
//         component: (
//           <Sheet>
//             <SheetTrigger>Open</SheetTrigger>
//             <SheetContent>
//               <SheetHeader>
//                 <SheetTitle>Are you absolutely sure?</SheetTitle>
//                 <SheetDescription>
//                   This action cannot be undone. This will permanently delete
//                   your account and remove your data from our servers.
//                 </SheetDescription>
//               </SheetHeader>
//               <SheetPanel>Content</SheetPanel>
//               <SheetFooter>
//                 <SheetClose>Close</SheetClose>
//               </SheetFooter>
//             </SheetContent>
//           </Sheet>
//         ),
//         name: "Sheet",
//       },
//       {
//         component: (
//           <Popover>
//             <PopoverTrigger render={<Button variant="secondary" />}>
//               Open Popover
//             </PopoverTrigger>
//             <PopoverContent>
//               <div className="space-y-2">
//                 <h4 className="font-medium">Popover Title</h4>
//                 <p className="text-sm text-muted-foreground">
//                   Popover content goes here.
//                 </p>
//               </div>
//             </PopoverContent>
//           </Popover>
//         ),
//         name: "Popover",
//       },
//       {
//         component: (
//           <PreviewCard>
//             <PreviewCardTrigger render={<Button variant="link" />}>
//               Hover me
//             </PreviewCardTrigger>
//             <PreviewCardPopup>
//               <div className="space-y-2">
//                 <h4 className="font-medium">Hover Card</h4>
//                 <p className="text-sm text-muted-foreground">
//                   Content appears on hover.
//                 </p>
//               </div>
//             </PreviewCardPopup>
//           </PreviewCard>
//         ),
//         name: "PreviewCard (HoverCard)",
//       },
//       {
//         component: (
//           <CommandDialog>
//             <CommandDialogTrigger render={<Button variant="outline" />}>
//               Open Command Palette
//             </CommandDialogTrigger>

//             <CommandDialogPopup>
//               <Command items={items}>
//                 <CommandInput placeholder="Search..." />
//                 <CommandEmpty>No results found.</CommandEmpty>
//                 <CommandList>
//                   {(item) => (
//                     <CommandItem key={item.value} value={item.value}>
//                       {item.label}
//                     </CommandItem>
//                   )}
//                 </CommandList>
//               </Command>
//             </CommandDialogPopup>
//           </CommandDialog>
//         ),
//         name: "Command",
//       },
//     ],
//     name: "Overlays",
//   },
// ];

// export default function UiPlayground() {
//   const totalComponents = useMemo(() => {
//     let total = 0;
//     for (const cat of componentCategories) {
//       if ("components" in cat && cat.components) {
//         total += cat.components.length;
//       } else {
//         total += 1;
//       }
//     }
//     return total;
//   }, []);

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
//             <div className="flex items-center gap-4">
//               <a
//                 href="/"
//                 className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
//               >
//                 <svg
//                   className="h-5 w-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                   />
//                 </svg>
//                 <span className="text-sm">Back</span>
//               </a>
//               <Separator orientation="vertical" className="h-6" />
//               <h1 className="text-xl font-semibold text-foreground">
//                 UI Playground
//               </h1>
//             </div>
//             <Badge variant="secondary">{totalComponents} components</Badge>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {componentCategories.map((category, categoryIndex) => {
//             if ("component" in category) {
//               return (
//                 <Card key={categoryIndex}>
//                   <CardHeader>
//                     <CardTitle className="text-base">{category.name}</CardTitle>
//                     <CardDescription>Some Description</CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex min-h-[120px] items-center justify-center">
//                     {category.component}
//                   </CardContent>
//                 </Card>
//               );
//             }

//             const catWithComponents = category as CategoryWithComponents;
//             return catWithComponents.components.map((item, componentIndex) => (
//               <Card key={`${categoryIndex}-${componentIndex}`}>
//                 <CardHeader>
//                   <CardTitle className="text-base">{item.name}</CardTitle>
//                   <CardDescription>Some Description</CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex min-h-[120px] items-center justify-center">
//                   {item.component}
//                 </CardContent>
//               </Card>
//             ));
//           })}
//         </div>
//       </main>

//       <footer className="mt-12 border-t border-border px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
//           Built with Base UI components
//         </div>
//       </footer>
//     </div>
//   );
// }
