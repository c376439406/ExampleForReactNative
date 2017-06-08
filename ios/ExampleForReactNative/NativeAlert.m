//
//  NativeAlert.m
//  ExampleForReactNative
//
//  Created by Jock杰 on 17/6/8.
//  Copyright © 2017年 Facebook. All rights reserved.
//
#import "NativeAlert.h"
#import "AppDelegate.h"

@interface NativeAlert()
@property (nonatomic, strong) UITextField *textField;
@property (nonatomic, strong) UILabel *label;
@property (nonatomic, strong) UIButton *btn;
@property (nonatomic, strong) RCTResponseSenderBlock callback;
@end

@implementation NativeAlert

- (instancetype)init {
  self = [super init];
  if (self) {
    self.view.backgroundColor = [UIColor whiteColor];
    self.textField.placeholder = @"原生输入框";
    self.label.text = @"RN输入";
    [self.btn setTitle:@"原生按钮" forState:UIControlStateNormal];
  }
  return self;
}

//  必须实现“RCTBridgeModule”协议
RCT_EXPORT_MODULE();

//  对外提供调用方法（testNormalEvent为方法名，后面为参数，按顺序和对应数据类型在js进行传递）
RCT_EXPORT_METHOD(testNormalEvent:(NSString *)name forSomething:(NSString *)thing){
  
  [[NSNotificationCenter defaultCenter] postNotificationName:@"addNativeView" object:nil];

  self.label.text = [NSString stringWithFormat:@"%@ %@", name, thing];
  
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:name
                                                    message:thing
                                                   delegate:nil
                                          cancelButtonTitle:@"确定"
                                          otherButtonTitles:nil, nil];
    [alert show];
  });

  NSLog(@"%@ %@", name, thing);
}

//  对外提供调用方法,演示Callback
RCT_EXPORT_METHOD(testCallbackEvent:(RCTResponseSenderBlock)callback)
{
  self.callback = callback;
  
  NSString *event = @"iOS原生回调的字符串";
  
  callback(@[[NSNull null], event]);
}

- (void)dismissSelf {
  [self dismissViewControllerAnimated:YES
                           completion:nil];
}

- (UITextField *)textField {
  if (!_textField) {
    _textField = [[UITextField alloc] initWithFrame:CGRectMake(50, 50, 100, 20)];
    _textField.backgroundColor = [UIColor yellowColor];
    [self.view addSubview:_textField];
  }
  return _textField;
}

- (UILabel *)label {
  if (!_label) {
    _label = [[UILabel alloc] initWithFrame:CGRectMake(50, 75, 100, 20)];
    _label.backgroundColor = [UIColor whiteColor];
    _label.textColor = [UIColor blueColor];
    [self.view addSubview:_label];
  }
  return _label;
}

- (UIButton *)btn {
  if (!_btn) {
    _btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [_btn setBackgroundColor:[UIColor redColor]];
    _btn.frame = CGRectMake(50, 150, 100, 20);
    [_btn addTarget:self
             action:@selector(dismissSelf)
   forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:_btn];
  }
  return _btn;
}

@end
