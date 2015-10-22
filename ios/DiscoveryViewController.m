//
//  DiscoveryViewController.m
//  fiteam
//
//  Created by guguyanhua on 10/22/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "DiscoveryViewController.h"
#import "RCTRootView.h"
#import "AppDelegate.h"

@interface DiscoveryViewController ()

@end

@implementation DiscoveryViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  self.title = @"Discovery View";
  
  // We need a reference to the AppDelegate since that is where we stored our `RCTBridge`.
  AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  
  // Here we create a `RCTRootView` that initializes with the `RCTBridge` that we already pre-loaded.
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:delegate.bridge moduleName:@"discovery" initialProperties:nil];
  
  // We only want this view to take a small portion of the screen.
  rootView.frame = [UIScreen mainScreen].bounds;
  
  // Each `ViewController` comes with it's own "base" view, here we just want to add our `RCTRootView`
  // to that "base" view so that it is visible on the screen.
  [self.view addSubview:rootView];
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
