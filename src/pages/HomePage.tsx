import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-3 space-y-3">
      <div className="rounded border p-3">
        <div className="font-semibold text-lg">Introduction</div>
        <div>
          The Epherome Tools is a versatile toolkit designed for multiple needs.
          Some of them are especially designed for the education system of
          China(Mainland) so they're only provided in Chinese(Simplified).
        </div>
      </div>
      <div className="rounded border p-3">
        <div className="font-semibold text-lg">Entrances</div>
        <div>
          <Button variant="link" onClick={() => navigate("/json")}>
            JSON Formatting
          </Button>
          <Button variant="link" onClick={() => navigate("/base64")}>
            Base64 Encode/Decode
          </Button>
        </div>
      </div>
    </div>
  );
}
