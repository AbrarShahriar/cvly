import { ReactElement } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  trigger?: ReactElement;
  description: string;
  open: boolean;
  setOpen: (val: boolean) => void;
}

export function Modal({
  description,
  title,
  trigger,
  open,
  setOpen,
}: ModalProps) {
  return (
    <Dialog open={open}>
      {/* <DialogTrigger asChild>{trigger}</DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
