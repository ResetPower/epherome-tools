import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { base64Decode, base64Encode } from "@/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Status = "none" | "encoded" | "decoded" | "error";

export default function Base64Code() {
  const navigate = useNavigate();
  const [plain, setPlain] = useState(String());
  const [encrypted, setEncrypted] = useState(String());
  const [status, setStatus] = useState<Status>("none");

  const onEncode = () => {
    try {
      setEncrypted(base64Encode(plain));
      setStatus("encoded");
    } catch {
      setStatus("error");
    }
  };
  const onDecode = () => {
    try {
      setPlain(base64Decode(encrypted));
      setStatus("decoded");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="p-3 space-y-3">
      <div className="flex space-x-3 items-center">
        <Button onClick={() => navigate("/")}>Back</Button>
        <Button onClick={onEncode}>Encode</Button>
        <Button onClick={onDecode}>Decode</Button>
        {status === "encoded" && (
          <div className="text-green-500 text-sm">Encoded.</div>
        )}
        {status === "decoded" && (
          <div className="text-green-500 text-sm">Decoded.</div>
        )}
        {status === "error" && (
          <div className="text-red-500 text-sm">Error Occurred.</div>
        )}
      </div>
      <div className="flex space-x-3">
        <Textarea
          value={plain}
          onChange={(ev) => setPlain(ev.target.value)}
          title="Plain"
          placeholder="Type plain text here. / See decode results here."
        />
        <Textarea
          value={encrypted}
          onChange={(ev) => setEncrypted(ev.target.value)}
          title="Encrypted"
          placeholder="Type encrypted text here. / See encode results here."
        />
      </div>
    </div>
  );
}
