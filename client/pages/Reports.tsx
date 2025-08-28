import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { FileText, MapPin, Clock, AlertTriangle, CheckCircle, Eye, MessageCircle, Share, Camera, Filter } from 'lucide-react';

export default function Reports() {
  const [activeTab, setActiveTab] = useState('view');
  const [reportForm, setReportForm] = useState({
    title: '',
    category: '',
    location: '',
    urgency: '',
    description: '',
    time_occurred: '',
    reporter_name: '',
    reporter_contact: '',
    anonymous: false,
    verified: false
  });

  const [filterBy, setFilterBy] = useState({
    category: '',
    urgency: '',
    status: '',
    location: ''
  });

  const handleReportSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report submitted:', reportForm);
    // Handle report submission
  };

  const mockReports = [
    {
      id: 1,
      title: "Building Collapse on Main Street",
      category: "Infrastructure",
      location: "Downtown Main St & 5th Ave",
      urgency: "critical",
      description: "Partial building collapse after recent earthquake. Road blocked, possible injuries.",
      time_occurred: "2 hours ago",
      reporter: "Anonymous",
      status: "verified",
      views: 156,
      comments: 12,
      verification_score: 85,
      images: 3
    },
    {
      id: 2,
      title: "Water Distribution Point Setup",
      category: "Aid Distribution",
      location: "Central Park Entrance",
      urgency: "medium",
      description: "New water distribution point established. Free clean water available for affected families.",
      time_occurred: "4 hours ago",
      reporter: "Sarah M.",
      status: "verified",
      views: 89,
      comments: 5,
      verification_score: 92,
      images: 2
    },
    {
      id: 3,
      title: "Road Closure due to Flooding",
      category: "Transportation",
      location: "Highway 101 North",
      urgency: "high",
      description: "Major flooding has made Highway 101 impassable. Emergency vehicles only.",
      time_occurred: "6 hours ago",
      reporter: "John D.",
      status: "pending",
      views: 234,
      comments: 8,
      verification_score: 67,
      images: 1
    },
    {
      id: 4,
      title: "Shelter Opening at Community Center",
      category: "Shelter",
      location: "Riverside Community Center",
      urgency: "medium",
      description: "Emergency shelter opened with capacity for 200 people. Hot meals and basic supplies available.",
      time_occurred: "1 day ago",
      reporter: "Maria L.",
      status: "verified",
      views: 312,
      comments: 18,
      verification_score: 94,
      images: 4
    },
    {
      id: 5,
      title: "Missing Person Last Seen",
      category: "Missing Person",
      location: "University District",
      urgency: "high",
      description: "David Chen, 34, last seen near university campus. Wearing blue jacket. Family seeking information.",
      time_occurred: "12 hours ago",
      reporter: "Chen Family",
      status: "unverified",
      views: 445,
      comments: 23,
      verification_score: 45,
      images: 1
    }
  ];

  const statusColors = {
    verified: 'bg-green-100 text-green-800 border-green-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    unverified: 'bg-gray-100 text-gray-800 border-gray-200',
    disputed: 'bg-red-100 text-red-800 border-red-200'
  };

  const urgencyColors = {
    critical: 'bg-red-100 text-red-800 border-red-200',
    high: 'bg-orange-100 text-orange-800 border-orange-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200'
  };

  const filteredReports = mockReports.filter(report => {
    const matchesCategory = !filterBy.category || report.category === filterBy.category;
    const matchesUrgency = !filterBy.urgency || report.urgency === filterBy.urgency;
    const matchesStatus = !filterBy.status || report.status === filterBy.status;
    const matchesLocation = !filterBy.location || 
      report.location.toLowerCase().includes(filterBy.location.toLowerCase());
    
    return matchesCategory && matchesUrgency && matchesStatus && matchesLocation;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Citizen Reporting</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Report incidents, verify information, and stay informed about local crisis situations in real-time.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm border">
              <button
                onClick={() => setActiveTab('view')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'view'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                View Reports
              </button>
              <button
                onClick={() => setActiveTab('submit')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'submit'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Submit Report
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'map'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Incident Map
              </button>
            </div>
          </div>

          {/* View Reports Tab */}
          {activeTab === 'view' && (
            <div>
              {/* Filters */}
              <Card className="shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-purple-600" />
                    Filter Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="filter-category">Category</Label>
                      <select
                        id="filter-category"
                        value={filterBy.category}
                        onChange={(e) => setFilterBy(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">All Categories</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Aid Distribution">Aid Distribution</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Shelter">Shelter</option>
                        <option value="Missing Person">Missing Person</option>
                        <option value="Security">Security</option>
                        <option value="Medical">Medical</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="filter-urgency">Urgency</Label>
                      <select
                        id="filter-urgency"
                        value={filterBy.urgency}
                        onChange={(e) => setFilterBy(prev => ({ ...prev, urgency: e.target.value }))}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">All Urgency Levels</option>
                        <option value="critical">Critical</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="filter-status">Verification Status</Label>
                      <select
                        id="filter-status"
                        value={filterBy.status}
                        onChange={(e) => setFilterBy(prev => ({ ...prev, status: e.target.value }))}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">All Statuses</option>
                        <option value="verified">Verified</option>
                        <option value="pending">Pending Verification</option>
                        <option value="unverified">Unverified</option>
                        <option value="disputed">Disputed</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="filter-location">Location</Label>
                      <Input
                        id="filter-location"
                        value={filterBy.location}
                        onChange={(e) => setFilterBy(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="Search by location"
                      />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    Showing {filteredReports.length} of {mockReports.length} reports
                  </div>
                </CardContent>
              </Card>

              {/* Reports List */}
              <div className="space-y-6">
                {filteredReports.map((report) => (
                  <Card key={report.id} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{report.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className={statusColors[report.status as keyof typeof statusColors]}>
                              {report.status === 'verified' && <CheckCircle className="h-3 w-3 mr-1" />}
                              {report.status === 'pending' && <Clock className="h-3 w-3 mr-1" />}
                              {report.status === 'disputed' && <AlertTriangle className="h-3 w-3 mr-1" />}
                              {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                            </Badge>
                            <Badge className={urgencyColors[report.urgency as keyof typeof urgencyColors]}>
                              {report.urgency.toUpperCase()}
                            </Badge>
                            <Badge variant="outline">{report.category}</Badge>
                            {report.images > 0 && (
                              <Badge variant="outline">
                                <Camera className="h-3 w-3 mr-1" />
                                {report.images} photos
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-sm text-gray-500 mb-1">Verification Score</div>
                          <div className={`text-lg font-bold ${
                            report.verification_score >= 80 ? 'text-green-600' :
                            report.verification_score >= 60 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {report.verification_score}%
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {report.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {report.time_occurred}
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Reported by: {report.reporter}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{report.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {report.views} views
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {report.comments} comments
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Comment
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share className="mr-2 h-4 w-4" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Submit Report Tab */}
          {activeTab === 'submit' && (
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Submit Incident Report
                  </CardTitle>
                  <CardDescription>
                    Report incidents, events, or important information to help your community stay informed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleReportSubmission} className="space-y-6">
                    <div>
                      <Label htmlFor="report-title">Incident Title</Label>
                      <Input
                        id="report-title"
                        value={reportForm.title}
                        onChange={(e) => setReportForm(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Brief, clear description of the incident"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="report-category">Category</Label>
                        <select
                          id="report-category"
                          value={reportForm.category}
                          onChange={(e) => setReportForm(prev => ({ ...prev, category: e.target.value }))}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          required
                        >
                          <option value="">Select category</option>
                          <option value="Infrastructure">Infrastructure Damage</option>
                          <option value="Aid Distribution">Aid Distribution</option>
                          <option value="Transportation">Transportation</option>
                          <option value="Shelter">Shelter Information</option>
                          <option value="Missing Person">Missing Person</option>
                          <option value="Security">Security Concern</option>
                          <option value="Medical">Medical Emergency</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="report-urgency">Urgency Level</Label>
                        <select
                          id="report-urgency"
                          value={reportForm.urgency}
                          onChange={(e) => setReportForm(prev => ({ ...prev, urgency: e.target.value }))}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          required
                        >
                          <option value="">Select urgency</option>
                          <option value="critical">Critical - Immediate danger</option>
                          <option value="high">High - Urgent attention needed</option>
                          <option value="medium">Medium - Important but not urgent</option>
                          <option value="low">Low - General information</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="report-location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="report-location"
                          value={reportForm.location}
                          onChange={(e) => setReportForm(prev => ({ ...prev, location: e.target.value }))}
                          placeholder="Specific address, intersection, or landmark"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="report-time">When did this occur?</Label>
                      <Input
                        id="report-time"
                        type="datetime-local"
                        value={reportForm.time_occurred}
                        onChange={(e) => setReportForm(prev => ({ ...prev, time_occurred: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="report-description">Detailed Description</Label>
                      <Textarea
                        id="report-description"
                        value={reportForm.description}
                        onChange={(e) => setReportForm(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Provide as much detail as possible. Include what you saw, heard, or experienced."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-medium text-gray-900 mb-4">Reporter Information (Optional)</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <input
                            id="anonymous"
                            type="checkbox"
                            checked={reportForm.anonymous}
                            onChange={(e) => setReportForm(prev => ({ ...prev, anonymous: e.target.checked }))}
                            className="rounded border-gray-300"
                          />
                          <Label htmlFor="anonymous">
                            Submit anonymously
                          </Label>
                        </div>

                        {!reportForm.anonymous && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="reporter-name">Your Name</Label>
                              <Input
                                id="reporter-name"
                                value={reportForm.reporter_name}
                                onChange={(e) => setReportForm(prev => ({ ...prev, reporter_name: e.target.value }))}
                                placeholder="Optional - for verification"
                              />
                            </div>
                            <div>
                              <Label htmlFor="reporter-contact">Contact (Phone/Email)</Label>
                              <Input
                                id="reporter-contact"
                                value={reportForm.reporter_contact}
                                onChange={(e) => setReportForm(prev => ({ ...prev, reporter_contact: e.target.value }))}
                                placeholder="Optional - for follow-up"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-900 mb-2">Before Submitting:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Ensure the information is accurate to the best of your knowledge</li>
                        <li>• Do not share personal information of others without consent</li>
                        <li>• For immediate emergencies, contact emergency services first</li>
                        <li>• Your report may be verified by community members</li>
                      </ul>
                    </div>

                    <Button type="submit" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Submit Report
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Map Tab */}
          {activeTab === 'map' && (
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Interactive Incident Map
                  </CardTitle>
                  <CardDescription>
                    View reported incidents on an interactive map of your area
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for map - in real implementation, this would be an interactive map */}
                  <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map Coming Soon</h3>
                      <p className="text-gray-600 max-w-sm">
                        This area will display an interactive map showing incident locations, emergency services, 
                        aid distribution points, and other important crisis information.
                      </p>
                    </div>
                  </div>

                  {/* Map Legend */}
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Critical Incidents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Aid Distribution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Shelters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Road Closures</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
