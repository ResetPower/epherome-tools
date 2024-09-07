import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Status = "success" | "error" | "none";

export default function JSONFormatting() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<Status>("none");
  const [content, setContent] = useState(String());

  const onFormat = () => {
    const ct = content;
    try {
      const obj = JSON.parse(ct);
      setContent(JSON.stringify(obj, null, "\t"));
      setStatus("success");
      setCount((prev) => prev + 1);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="p-3 space-y-3">
      <div className="flex space-x-3 items-center">
        <Button variant="outline" onClick={() => navigate("/")}>
          Back
        </Button>
        <Button variant="secondary" onClick={onFormat}>
          Format
        </Button>
        {status === "success" && (
          <div className="text-sm text-green-500">
            Formatted. {count && `×${count}`}
          </div>
        )}
        {status === "error" && (
          <div className="text-sm text-red-500">Illegal JSON Format.</div>
        )}
      </div>
      <Textarea
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
        placeholder="Type your JSON here."
      />
    </div>
  );
}
