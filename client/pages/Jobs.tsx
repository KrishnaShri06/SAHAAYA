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
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  User,
  Building,
  Search,
  Filter,
  Plus,
  Heart,
  Globe,
} from "lucide-react";

export default function Jobs() {
  const [activeTab, setActiveTab] = useState("search");
  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary_range: "",
    description: "",
    requirements: "",
    contact: "",
    refugee_friendly: false,
  });

  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    education: "",
    languages: "",
    work_authorization: "",
    availability: "",
  });

  const [searchFilters, setSearchFilters] = useState({
    keyword: "",
    location: "",
    type: "",
    refugee_friendly: false,
  });

  const handleJobPost = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job posted:", jobForm);
    // Handle job posting
  };

  const handleProfileCreation = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile created:", profileForm);
    // Handle profile creation
  };

  const mockJobs = [
    {
      id: 1,
      title: "Customer Service Representative",
      company: "Global Support Services",
      location: "Remote / Downtown Office",
      type: "Full-time",
      salary: "$35,000 - $45,000",
      posted: "2 days ago",
      refugee_friendly: true,
      description:
        "Join our diverse team providing customer support. Training provided. Multiple languages welcome.",
      skills: ["Communication", "Problem Solving", "Multilingual"],
      urgency: "high",
    },
    {
      id: 2,
      title: "Kitchen Assistant",
      company: "Community Kitchen",
      location: "Local Restaurant District",
      type: "Part-time",
      salary: "$15 - $18/hour",
      posted: "1 day ago",
      refugee_friendly: true,
      description:
        "Entry-level position in busy kitchen. Will train. Great for gaining local work experience.",
      skills: ["Food Safety", "Teamwork", "Physical Work"],
      urgency: "medium",
    },
    {
      id: 3,
      title: "Language Interpreter",
      company: "Medical Center Network",
      location: "Various Hospitals",
      type: "Contract",
      salary: "$25 - $40/hour",
      posted: "3 days ago",
      refugee_friendly: true,
      description:
        "Seeking interpreters for multiple languages. Medical interpretation experience preferred.",
      skills: ["Translation", "Healthcare", "Certification"],
      urgency: "high",
    },
    {
      id: 4,
      title: "Warehouse Associate",
      company: "Logistics Plus",
      location: "Industrial District",
      type: "Full-time",
      salary: "$32,000 - $38,000",
      posted: "5 days ago",
      refugee_friendly: false,
      description:
        "Physical warehouse work including loading, unloading, and inventory management.",
      skills: ["Physical Labor", "Organization", "Equipment Operation"],
      urgency: "medium",
    },
    {
      id: 5,
      title: "Community Outreach Coordinator",
      company: "Refugee Support Organization",
      location: "Community Center",
      type: "Full-time",
      salary: "$40,000 - $50,000",
      posted: "1 week ago",
      refugee_friendly: true,
      description:
        "Help other refugees navigate services and programs. Personal experience valued.",
      skills: ["Communication", "Cultural Competency", "Social Work"],
      urgency: "low",
    },
  ];

  const filteredJobs = mockJobs.filter((job) => {
    const matchesKeyword =
      !searchFilters.keyword ||
      job.title.toLowerCase().includes(searchFilters.keyword.toLowerCase()) ||
      job.company.toLowerCase().includes(searchFilters.keyword.toLowerCase());

    const matchesLocation =
      !searchFilters.location ||
      job.location.toLowerCase().includes(searchFilters.location.toLowerCase());

    const matchesType = !searchFilters.type || job.type === searchFilters.type;

    const matchesRefugeeFriendly =
      !searchFilters.refugee_friendly || job.refugee_friendly;

    return (
      matchesKeyword && matchesLocation && matchesType && matchesRefugeeFriendly
    );
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Job & Skill Match
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting refugees and displaced persons with meaningful
              employment opportunities and skill-based work.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm border">
              <button
                onClick={() => setActiveTab("search")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "search"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                Find Jobs
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "profile"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                Create Profile
              </button>
              <button
                onClick={() => setActiveTab("post")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "post"
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                Post Job
              </button>
            </div>
          </div>

          {/* Job Search Tab */}
          {activeTab === "search" && (
            <div>
              {/* Search and Filters */}
              <Card className="shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-green-600" />
                    Job Search
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <Label htmlFor="search-keyword">Keywords</Label>
                      <Input
                        id="search-keyword"
                        value={searchFilters.keyword}
                        onChange={(e) =>
                          setSearchFilters((prev) => ({
                            ...prev,
                            keyword: e.target.value,
                          }))
                        }
                        placeholder="Job title, company, skills..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="search-location">Location</Label>
                      <Input
                        id="search-location"
                        value={searchFilters.location}
                        onChange={(e) =>
                          setSearchFilters((prev) => ({
                            ...prev,
                            location: e.target.value,
                          }))
                        }
                        placeholder="City, state, or remote"
                      />
                    </div>
                    <div>
                      <Label htmlFor="search-type">Job Type</Label>
                      <select
                        id="search-type"
                        value={searchFilters.type}
                        onChange={(e) =>
                          setSearchFilters((prev) => ({
                            ...prev,
                            type: e.target.value,
                          }))
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">All Types</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Temporary">Temporary</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <div className="w-full">
                        <Label
                          htmlFor="refugee-friendly"
                          className="flex items-center gap-2"
                        >
                          <input
                            id="refugee-friendly"
                            type="checkbox"
                            checked={searchFilters.refugee_friendly}
                            onChange={(e) =>
                              setSearchFilters((prev) => ({
                                ...prev,
                                refugee_friendly: e.target.checked,
                              }))
                            }
                            className="rounded border-gray-300"
                          />
                          <Globe className="h-4 w-4" />
                          Refugee-friendly only
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Showing {filteredJobs.length} of {mockJobs.length} jobs
                  </div>
                </CardContent>
              </Card>

              {/* Job Listings */}
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {job.title}
                          </h3>
                          <p className="text-gray-600 mb-2">{job.company}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {job.refugee_friendly && (
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                <Globe className="h-3 w-3 mr-1" />
                                Refugee-Friendly
                              </Badge>
                            )}
                            <Badge variant="outline">{job.type}</Badge>
                            {job.urgency === "high" && (
                              <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                                Urgent Hiring
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">
                            {job.salary}
                          </p>
                          <p className="text-sm text-gray-500">
                            Posted {job.posted}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{job.description}</p>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Required Skills:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button>
                          <Briefcase className="mr-2 h-4 w-4" />
                          Apply Now
                        </Button>
                        <Button variant="outline">
                          <Heart className="mr-2 h-4 w-4" />
                          Save Job
                        </Button>
                        <Button variant="outline">
                          <Building className="mr-2 h-4 w-4" />
                          Company Info
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Profile Creation Tab */}
          {activeTab === "profile" && (
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    Create Your Job Seeker Profile
                  </CardTitle>
                  <CardDescription>
                    Build a comprehensive profile to match with the right
                    opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileCreation} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="profile-name">Full Name</Label>
                        <Input
                          id="profile-name"
                          value={profileForm.name}
                          onChange={(e) =>
                            setProfileForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="profile-email">Email</Label>
                        <Input
                          id="profile-email"
                          type="email"
                          value={profileForm.email}
                          onChange={(e) =>
                            setProfileForm((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="profile-phone">Phone Number</Label>
                        <Input
                          id="profile-phone"
                          type="tel"
                          value={profileForm.phone}
                          onChange={(e) =>
                            setProfileForm((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="profile-location">
                          Current Location
                        </Label>
                        <Input
                          id="profile-location"
                          value={profileForm.location}
                          onChange={(e) =>
                            setProfileForm((prev) => ({
                              ...prev,
                              location: e.target.value,
                            }))
                          }
                          placeholder="City, State"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="profile-skills">Skills & Abilities</Label>
                      <Textarea
                        id="profile-skills"
                        value={profileForm.skills}
                        onChange={(e) =>
                          setProfileForm((prev) => ({
                            ...prev,
                            skills: e.target.value,
                          }))
                        }
                        placeholder="List your skills, certifications, and areas of expertise"
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="profile-experience">
                        Work Experience
                      </Label>
                      <Textarea
                        id="profile-experience"
                        value={profileForm.experience}
                        onChange={(e) =>
                          setProfileForm((prev) => ({
                            ...prev,
                            experience: e.target.value,
                          }))
                        }
                        placeholder="Describe your previous work experience, including jobs in your home country"
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="profile-education">Education</Label>
                      <Textarea
                        id="profile-education"
                        value={profileForm.education}
                        onChange={(e) =>
                          setProfileForm((prev) => ({
                            ...prev,
                            education: e.target.value,
                          }))
                        }
                        placeholder="Your educational background, degrees, and training"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="profile-languages">Languages</Label>
                      <Input
                        id="profile-languages"
                        value={profileForm.languages}
                        onChange={(e) =>
                          setProfileForm((prev) => ({
                            ...prev,
                            languages: e.target.value,
                          }))
                        }
                        placeholder="Languages you speak (e.g., English - Advanced, Spanish - Native)"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="profile-authorization">
                        Work Authorization Status
                      </Label>
                      <select
                        id="profile-authorization"
                        value={profileForm.work_authorization}
                        onChange={(e) =>
                          setProfileForm((prev) => ({
                            ...prev,
                            work_authorization: e.target.value,
                          }))
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      >
                        <option value="">Select status</option>
                        <option value="citizen">US Citizen</option>
                        <option value="permanent_resident">
                          Permanent Resident
                        </option>
                        <option value="refugee">Refugee Status</option>
                        <option value="asylum">Asylum Seeker</option>
                        <option value="work_permit">Work Permit Holder</option>
                        <option value="pending">Authorization Pending</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="profile-availability">Availability</Label>
                      <select
                        id="profile-availability"
                        value={profileForm.availability}
                        onChange={(e) =>
                          setProfileForm((prev) => ({
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
                          Part-time (less than 30 hours/week)
                        </option>
                        <option value="flexible">Flexible schedule</option>
                        <option value="weekends">Weekends only</option>
                        <option value="evenings">Evenings only</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full">
                      <User className="mr-2 h-4 w-4" />
                      Create Profile
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Job Posting Tab */}
          {activeTab === "post" && (
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5 text-purple-600" />
                    Post a Job Opportunity
                  </CardTitle>
                  <CardDescription>
                    Help refugees and displaced persons by posting inclusive job
                    opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleJobPost} className="space-y-6">
                    <div>
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input
                        id="job-title"
                        value={jobForm.title}
                        onChange={(e) =>
                          setJobForm((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        placeholder="e.g., Customer Service Representative"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="job-company">Company Name</Label>
                        <Input
                          id="job-company"
                          value={jobForm.company}
                          onChange={(e) =>
                            setJobForm((prev) => ({
                              ...prev,
                              company: e.target.value,
                            }))
                          }
                          placeholder="Your company name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="job-location">Location</Label>
                        <Input
                          id="job-location"
                          value={jobForm.location}
                          onChange={(e) =>
                            setJobForm((prev) => ({
                              ...prev,
                              location: e.target.value,
                            }))
                          }
                          placeholder="City, State or Remote"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="job-type">Job Type</Label>
                        <select
                          id="job-type"
                          value={jobForm.type}
                          onChange={(e) =>
                            setJobForm((prev) => ({
                              ...prev,
                              type: e.target.value,
                            }))
                          }
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          required
                        >
                          <option value="">Select type</option>
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Temporary">Temporary</option>
                          <option value="Internship">Internship</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="job-salary">Salary Range</Label>
                        <Input
                          id="job-salary"
                          value={jobForm.salary_range}
                          onChange={(e) =>
                            setJobForm((prev) => ({
                              ...prev,
                              salary_range: e.target.value,
                            }))
                          }
                          placeholder="e.g., $35,000 - $45,000 or $15/hour"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="job-description">Job Description</Label>
                      <Textarea
                        id="job-description"
                        value={jobForm.description}
                        onChange={(e) =>
                          setJobForm((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                        placeholder="Describe the role, responsibilities, and what makes your company a great place to work"
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="job-requirements">
                        Requirements & Skills
                      </Label>
                      <Textarea
                        id="job-requirements"
                        value={jobForm.requirements}
                        onChange={(e) =>
                          setJobForm((prev) => ({
                            ...prev,
                            requirements: e.target.value,
                          }))
                        }
                        placeholder="List required skills, experience, and qualifications. Include if training will be provided."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="job-contact">Contact Information</Label>
                      <Input
                        id="job-contact"
                        value={jobForm.contact}
                        onChange={(e) =>
                          setJobForm((prev) => ({
                            ...prev,
                            contact: e.target.value,
                          }))
                        }
                        placeholder="Email or phone for applications"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        id="refugee-friendly-post"
                        type="checkbox"
                        checked={jobForm.refugee_friendly}
                        onChange={(e) =>
                          setJobForm((prev) => ({
                            ...prev,
                            refugee_friendly: e.target.checked,
                          }))
                        }
                        className="rounded border-gray-300"
                      />
                      <Label
                        htmlFor="refugee-friendly-post"
                        className="flex items-center gap-2"
                      >
                        <Globe className="h-4 w-4" />
                        This is a refugee-friendly position
                      </Label>
                    </div>
                    <p className="text-sm text-gray-600">
                      Check this if your company welcomes refugees, provides
                      training, or has support for immigrants.
                    </p>

                    <Button type="submit" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Post Job Opportunity
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
