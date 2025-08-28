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
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Heart,
  Package,
  MapPin,
  Calendar,
  Star,
  Phone,
} from "lucide-react";

export default function NGO() {
  const [activeTab, setActiveTab] = useState("requests");
  const [aidRequest, setAidRequest] = useState({
    title: "",
    organization: "",
    location: "",
    urgency: "",
    category: "",
    description: "",
    contact: "",
    volunteers_needed: "",
  });

  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    experience: "",
  });

  const handleAidRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Aid request submitted:", aidRequest);
    // Handle aid request submission
  };

  const handleVolunteerRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Volunteer registered:", volunteerForm);
    // Handle volunteer registration
  };

  const urgencyColors = {
    critical: "bg-red-100 text-red-800 border-red-200",
    high: "bg-orange-100 text-orange-800 border-orange-200",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    low: "bg-green-100 text-green-800 border-green-200",
  };

  const mockAidRequests = [
    {
      id: 1,
      title: "Medical Supplies for Flood Victims",
      organization: "Red Cross Regional",
      location: "Downtown Shelter",
      urgency: "critical",
      category: "Medical",
      volunteers_needed: 12,
      description:
        "Urgent need for medical supplies and trained volunteers to assist flood victims.",
      posted: "2 hours ago",
    },
    {
      id: 2,
      title: "Food Distribution Center",
      organization: "Local Food Bank",
      location: "Community Center",
      urgency: "high",
      category: "Food & Water",
      volunteers_needed: 8,
      description: "Help distribute meals to displaced families.",
      posted: "5 hours ago",
    },
    {
      id: 3,
      title: "Temporary Shelter Setup",
      organization: "Salvation Army",
      location: "School Gymnasium",
      urgency: "medium",
      category: "Shelter",
      volunteers_needed: 15,
      description:
        "Need volunteers to help set up temporary housing facilities.",
      posted: "1 day ago",
    },
  ];

  const mockNGOs = [
    {
      name: "International Relief Foundation",
      type: "International NGO",
      focus: "Disaster Relief, Medical Aid",
      volunteers: 2500,
      rating: 4.8,
      contact: "+1 (555) 123-4567",
    },
    {
      name: "Local Community Support",
      type: "Community Organization",
      focus: "Food Distribution, Shelter",
      volunteers: 150,
      rating: 4.6,
      contact: "+1 (555) 987-6543",
    },
    {
      name: "Emergency Medical Response",
      type: "Medical NGO",
      focus: "Medical Emergency, First Aid",
      volunteers: 800,
      rating: 4.9,
      contact: "+1 (555) 456-7890",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              NGO Coordination
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect NGOs, coordinate aid requests, and manage volunteer
              resources for effective crisis response.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm border">
              <button
                onClick={() => setActiveTab("requests")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "requests"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Aid Requests
              </button>
              <button
                onClick={() => setActiveTab("volunteer")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "volunteer"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Volunteer
              </button>
              <button
                onClick={() => setActiveTab("ngos")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "ngos"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                NGO Directory
              </button>
            </div>
          </div>

          {/* Aid Requests Tab */}
          {activeTab === "requests" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Submit Aid Request */}
              <div className="lg:col-span-1">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-blue-600" />
                      Submit Aid Request
                    </CardTitle>
                    <CardDescription>
                      Post a new aid request for your organization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAidRequest} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Request Title</Label>
                        <Input
                          id="title"
                          value={aidRequest.title}
                          onChange={(e) =>
                            setAidRequest((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          placeholder="Brief description of aid needed"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          value={aidRequest.organization}
                          onChange={(e) =>
                            setAidRequest((prev) => ({
                              ...prev,
                              organization: e.target.value,
                            }))
                          }
                          placeholder="Your organization name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={aidRequest.location}
                          onChange={(e) =>
                            setAidRequest((prev) => ({
                              ...prev,
                              location: e.target.value,
                            }))
                          }
                          placeholder="Where aid is needed"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="urgency">Urgency</Label>
                          <select
                            id="urgency"
                            value={aidRequest.urgency}
                            onChange={(e) =>
                              setAidRequest((prev) => ({
                                ...prev,
                                urgency: e.target.value,
                              }))
                            }
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            required
                          >
                            <option value="">Select urgency</option>
                            <option value="critical">Critical</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <select
                            id="category"
                            value={aidRequest.category}
                            onChange={(e) =>
                              setAidRequest((prev) => ({
                                ...prev,
                                category: e.target.value,
                              }))
                            }
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            required
                          >
                            <option value="">Select category</option>
                            <option value="medical">Medical</option>
                            <option value="food">Food & Water</option>
                            <option value="shelter">Shelter</option>
                            <option value="transport">Transportation</option>
                            <option value="supplies">Supplies</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="volunteers_needed">
                          Volunteers Needed
                        </Label>
                        <Input
                          id="volunteers_needed"
                          type="number"
                          value={aidRequest.volunteers_needed}
                          onChange={(e) =>
                            setAidRequest((prev) => ({
                              ...prev,
                              volunteers_needed: e.target.value,
                            }))
                          }
                          placeholder="Number of volunteers"
                          min="1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={aidRequest.description}
                          onChange={(e) =>
                            setAidRequest((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                          placeholder="Detailed description of what aid is needed"
                          rows={3}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="contact">Contact Information</Label>
                        <Input
                          id="contact"
                          value={aidRequest.contact}
                          onChange={(e) =>
                            setAidRequest((prev) => ({
                              ...prev,
                              contact: e.target.value,
                            }))
                          }
                          placeholder="Phone or email for coordination"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Package className="mr-2 h-4 w-4" />
                        Submit Aid Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Active Aid Requests */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-600" />
                      Active Aid Requests
                    </CardTitle>
                    <CardDescription>
                      Current aid requests from NGOs and organizations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockAidRequests.map((request) => (
                        <div
                          key={request.id}
                          className="border border-gray-200 rounded-lg p-6"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {request.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {request.organization}
                              </p>
                            </div>
                            <Badge
                              className={
                                urgencyColors[
                                  request.urgency as keyof typeof urgencyColors
                                ]
                              }
                            >
                              {request.urgency.toUpperCase()}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {request.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              {request.volunteers_needed} volunteers needed
                            </div>
                            <div className="flex items-center gap-2">
                              <Package className="h-4 w-4" />
                              {request.category}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              Posted {request.posted}
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4">
                            {request.description}
                          </p>

                          <div className="flex gap-3">
                            <Button size="sm">
                              <Users className="mr-2 h-4 w-4" />
                              Volunteer
                            </Button>
                            <Button size="sm" variant="outline">
                              <Building2 className="mr-2 h-4 w-4" />
                              Coordinate
                            </Button>
                            <Button size="sm" variant="outline">
                              <Phone className="mr-2 h-4 w-4" />
                              Contact
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Volunteer Tab */}
          {activeTab === "volunteer" && (
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Volunteer Registration
                  </CardTitle>
                  <CardDescription>
                    Join our volunteer network and help coordinate crisis
                    response efforts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleVolunteerRegistration}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="vol-name">Full Name</Label>
                        <Input
                          id="vol-name"
                          value={volunteerForm.name}
                          onChange={(e) =>
                            setVolunteerForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vol-email">Email</Label>
                        <Input
                          id="vol-email"
                          type="email"
                          value={volunteerForm.email}
                          onChange={(e) =>
                            setVolunteerForm((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="vol-phone">Phone Number</Label>
                      <Input
                        id="vol-phone"
                        type="tel"
                        value={volunteerForm.phone}
                        onChange={(e) =>
                          setVolunteerForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="vol-skills">Skills & Expertise</Label>
                      <Textarea
                        id="vol-skills"
                        value={volunteerForm.skills}
                        onChange={(e) =>
                          setVolunteerForm((prev) => ({
                            ...prev,
                            skills: e.target.value,
                          }))
                        }
                        placeholder="e.g., Medical training, logistics, translation, IT support..."
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="vol-availability">Availability</Label>
                      <select
                        id="vol-availability"
                        value={volunteerForm.availability}
                        onChange={(e) =>
                          setVolunteerForm((prev) => ({
                            ...prev,
                            availability: e.target.value,
                          }))
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      >
                        <option value="">Select availability</option>
                        <option value="full-time">
                          Full-time (40+ hours/week)
                        </option>
                        <option value="part-time">
                          Part-time (20-40 hours/week)
                        </option>
                        <option value="weekends">Weekends only</option>
                        <option value="emergency">
                          Emergency response only
                        </option>
                        <option value="flexible">Flexible schedule</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="vol-experience">
                        Previous Experience
                      </Label>
                      <Textarea
                        id="vol-experience"
                        value={volunteerForm.experience}
                        onChange={(e) =>
                          setVolunteerForm((prev) => ({
                            ...prev,
                            experience: e.target.value,
                          }))
                        }
                        placeholder="Describe any previous volunteer or crisis response experience"
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Register as Volunteer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* NGO Directory Tab */}
          {activeTab === "ngos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockNGOs.map((ngo, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      {ngo.name}
                    </CardTitle>
                    <CardDescription>{ngo.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Focus Areas:
                      </p>
                      <p className="text-sm text-gray-600">{ngo.focus}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {ngo.volunteers} volunteers
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">
                          {ngo.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {ngo.contact}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Partner
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
