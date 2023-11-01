"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSendEmail = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",

          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ userNameOrEmail: email, password }),
      });
      r;

      if (response.ok) {
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex  justify-center items-center  h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-md  md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>
        <Alert variant="destructive" className="mt-5 mb-5">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
        <form>
          <div className="mb-4">
            <Label htmlFor="email">Username or Email</Label>
            <Input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col ">
            <Button onClick={handleSendEmail}>Send Email</Button>

            <Button variant="primary" asChild>
              <Link href="/auth/login"> Login</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
