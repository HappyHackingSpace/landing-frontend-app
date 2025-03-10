'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const MobileFeature = () => {
  return (
    <div className="mobile-feature space-y-4 pb-16">
      <Card>
        <CardHeader>
          <CardTitle>Mobile Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            This component is specifically designed for the mobile layout.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              <span className="material-icons mr-2 text-sm">photo_camera</span>
              Camera
            </Button>
            <Button variant="outline" className="w-full">
              <span className="material-icons mr-2 text-sm">photo_library</span>
              Gallery
            </Button>
            <Button variant="outline" className="w-full">
              <span className="material-icons mr-2 text-sm">location_on</span>
              Location
            </Button>
            <Button variant="outline" className="w-full">
              <span className="material-icons mr-2 text-sm">share</span>
              Share
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Today's Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Steps</span>
              <span className="font-bold">6,542</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-3/4"></div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span>Water</span>
              <span className="font-bold">4/8 cups</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileFeature; 