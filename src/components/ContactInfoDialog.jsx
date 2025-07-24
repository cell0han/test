import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ContactInfoDialog = ({ isOpen, onClose }) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Холбоо барих мэдээлэл</AlertDialogTitle>
          <AlertDialogDescription>
            <p className="mb-2">
              <strong>Хаяг:</strong> Khoroo 9 9-р Хороо Ulaanbaatar, Компьютер молл цогцолбор Улаанбаатар 14182 B1 давхар №12 павилон
            </p>
            <p className="mb-2">
              <strong>Утас:</strong> 7676-9800, 90-305-105
            </p>
            <p>
              <strong>И-мэйл:</strong> <a href="mailto:Info@getblessedsoft.com" className="text-blue-600 hover:underline">Info@getblessedsoft.com</a>
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogAction onClick={onClose}>Хаах</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactInfoDialog;