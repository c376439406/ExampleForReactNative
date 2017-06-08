/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import "NativeAlert.h"
@interface AppDelegate ()
@property (nonatomic, strong) UIViewController *vc;
@property (nonatomic, strong) NativeAlert *nativeView;
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  
  /*
   RN视图初始化时赋值
   */
  NSDictionary *props = @{@"NativeName" : @"SF-SYT"};
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"ExampleForReactNative"
                                               initialProperties:props
                                                   launchOptions:launchOptions];
  /*
   也可以在初始化后赋值
   rootView.appProperties = @{@"NativeName" : @"SF-SYT"};
   */
  
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view.backgroundColor = [UIColor whiteColor];
  rootView.frame = rootViewController.view.bounds;
  [rootViewController.view addSubview:rootView];
  [rootViewController.view bringSubviewToFront:rootView];
  
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  self.vc = rootViewController;
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(addNativeView:)
                                               name:@"addNativeView"
                                             object:nil];
  
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(removeNativeView)
                                               name:@"addNativeView"
                                             object:nil];
  
  return YES;
}

- (void)addNativeView:(NSNotification *)notification {
  NativeAlert *nativeView=[notification object];
  self.nativeView = nativeView;
  NativeAlert *vc = [[NativeAlert alloc] init];;
  [self.vc presentViewController:vc animated:YES completion:nil];
}

- (void)removeNativeView {

}

@end
