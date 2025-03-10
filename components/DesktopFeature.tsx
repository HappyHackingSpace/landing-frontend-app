'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';

const DesktopFeature = () => {
  return (
    <div className="desktop-feature">
      <h2 className="text-3xl font-bold mb-6">Desktop Dashboard</h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
                <CardDescription>Monthly active users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">12,345</div>
                <p className="text-sm text-green-500 mt-2">↑ 12% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Monthly revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$48,290</div>
                <p className="text-sm text-green-500 mt-2">↑ 8% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Conversion</CardTitle>
                <CardDescription>Conversion rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">3.2%</div>
                <p className="text-sm text-red-500 mt-2">↓ 1% from last month</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest user actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-primary">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">Purchased Premium Plan</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">2 hours ago</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-primary">AS</span>
                  </div>
                  <div>
                    <p className="font-medium">Alice Smith</p>
                    <p className="text-sm text-muted-foreground">Updated profile information</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">5 hours ago</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-primary">RJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Robert Johnson</p>
                    <p className="text-sm text-muted-foreground">Submitted a support ticket</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">1 day ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Content</CardTitle>
              <CardDescription>View detailed analytics here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Analytics dashboard content would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>View and generate reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Reports dashboard content would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Settings dashboard content would go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DesktopFeature; 