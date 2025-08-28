import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Users,
} from "lucide-react";

export default function Emergency() {
  const [safetyStatus, setSafetyStatus] = useState<"safe" | "help" | null>(
    null,
  );
  const [helpForm, setHelpForm] = useState({
    name: "",
    location: "",
    phone: "",
    emergency: "",
    description: "",
  });
  const [checkOnForm, setCheckOnForm] = useState({
    name: "",
    phone: "",
  });

  const handleSafetyUpdate = (status: "safe" | "help") => {
    setSafetyStatus(status);
    // Here you would typically send this to your backend
    console.log("Safety status updated:", status);
  };

  const handleHelpRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Help request submitted:", helpForm);
    // Handle help request submission
  };

  const handleCheckOn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checking on person:", checkOnForm);
    // Handle checking on someone
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Emergency Check-in
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark yourself safe or request emergency assistance. Help us
              coordinate crisis response effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Quick Safety Status */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Your Safety Status
                </CardTitle>
                <CardDescription>
                  Let your family and authorities know you're safe
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    className={`h-16 text-lg ${safetyStatus === "safe" ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600"}`}
                    onClick={() => handleSafetyUpdate("safe")}
                  >
                    <CheckCircle className="mr-2 h-6 w-6" />
                    I'm Safe
                  </Button>
                  <Button
                    variant="destructive"
                    className={`h-16 text-lg ${safetyStatus === "help" ? "bg-red-700" : "bg-red-600 hover:bg-red-700"}`}
                    onClick={() => handleSafetyUpdate("help")}
                  >
                    <AlertCircle className="mr-2 h-6 w-6" />
                    Need Help
                  </Button>
                </div>

                {safetyStatus && (
                  <div
                    className={`p-4 rounded-lg ${safetyStatus === "safe" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                  >
                    <p
                      className={`text-sm font-medium ${safetyStatus === "safe" ? "text-green-800" : "text-red-800"}`}
                    >
                      {safetyStatus === "safe"
                        ? "✓ Status updated: You are marked as safe. Your family and emergency contacts will be notified."
                        : "⚠ Help request sent: Emergency responders have been notified of your situation."}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Emergency Contacts
                </CardTitle>
                <CardDescription>
                  Important numbers for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <span className="font-medium text-red-900">
                      Emergency Services
                    </span>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      <Phone className="h-4 w-4 mr-1" />
                      <p>100</p>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-medium text-blue-900">
                      Crisis Hotline
                    </span>
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4 mr-1" />
                      1-800-CRISIS
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium text-green-900">
                      Medical Emergency
                    </span>
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4 mr-1" />
                      Emergency
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Request Help Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Request Emergency Assistance
                </CardTitle>
                <CardDescription>
                  Provide details about your emergency situation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleHelpRequest} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="help-name">Your Name</Label>
                      <Input
                        id="help-name"
                        value={helpForm.name}
                        onChange={(e) =>
                          setHelpForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="help-phone">Phone Number</Label>
                      <Input
                        id="help-phone"
                        type="tel"
                        value={helpForm.phone}
                        onChange={(e) =>
                          setHelpForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="help-location">Current Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="help-location"
                        value={helpForm.location}
                        onChange={(e) =>
                          setHelpForm((prev) => ({
                            ...prev,
                            location: e.target.value,
                          }))
                        }
                        placeholder="Street address or landmark"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="help-emergency">Type of Emergency</Label>
                    <select
                      id="help-emergency"
                      value={helpForm.emergency}
                      onChange={(e) =>
                        setHelpForm((prev) => ({
                          ...prev,
                          emergency: e.target.value,
                        }))
                      }
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select emergency type</option>
                      <option value="medical">Medical Emergency</option>
                      <option value="trapped">Trapped/Cannot Move</option>
                      <option value="fire">Fire/Explosion</option>
                      <option value="flood">Flood/Water Damage</option>
                      <option value="violence">Violence/Security Threat</option>
                      <option value="missing">Missing Person</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="help-description">Description</Label>
                    <Textarea
                      id="help-description"
                      value={helpForm.description}
                      onChange={(e) =>
                        setHelpForm((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      placeholder="Describe your situation and what help you need"
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Send Emergency Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Check on Someone */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Check on Family & Friends
                </CardTitle>
                <CardDescription>
                  Search for the safety status of your loved ones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCheckOn} className="space-y-6">
                  <div>
                    <Label htmlFor="check-name">Person's Name</Label>
                    <Input
                      id="check-name"
                      value={checkOnForm.name}
                      onChange={(e) =>
                        setCheckOnForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="check-phone">Phone Number (if known)</Label>
                    <Input
                      id="check-phone"
                      type="tel"
                      value={checkOnForm.phone}
                      onChange={(e) =>
                        setCheckOnForm((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Search Safety Status
                  </Button>
                </form>

                {/* Recent Updates */}
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Recent Safety Updates
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div>
                        <p className="font-medium text-green-900">Jay Singh</p>
                        <p className="text-sm text-green-700">
                          Marked safe 2 hours ago
                        </p>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div>
                        <p className="font-medium text-gray-900">Sarah Roy</p>
                        <p className="text-sm text-gray-600">
                          No recent updates
                        </p>
                      </div>
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
