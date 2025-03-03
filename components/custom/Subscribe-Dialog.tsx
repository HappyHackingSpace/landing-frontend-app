import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@hhs/components/shadcn/dialog";
import { Button } from "@hhs/components/shadcn/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface SubscribeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SubscribeDialog = ({ open, onOpenChange }: SubscribeDialogProps) => {
  const [copied, setCopied] = useState(false);
  const calendarUrl = "https://happyhacking.space/api/events.ics"; // Replace with your actual calendar URL

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(calendarUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:max-w-[425px]">
        <DialogTitle className="text-center sm:text-left">
          Subscribe to Our Calendar
        </DialogTitle>
        <DialogHeader>
          <DialogDescription className="text-center sm:text-left">
            Add our events to your calendar by subscribing to our ICS feed.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2 sm:py-4">
          <p className="text-sm text-muted-foreground">
            Follow these steps to subscribe:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm px-2">
            <li>Copy the calendar URL below</li>
            <li>Open your calendar application</li>
            <li>Look for an option to add calendar by URL</li>
            <li>Paste the URL and save</li>
          </ol>
          <div className="flex items-center space-x-2 bg-muted p-2 rounded-md">
            <code className="flex-1 text-xs sm:text-sm break-all">
              {calendarUrl}
            </code>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 shrink-0"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          {copied && (
            <p className="text-sm text-green-500 text-center">
              URL copied to clipboard!
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeDialog;
