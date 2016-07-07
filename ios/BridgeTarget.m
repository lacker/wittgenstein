//  BridgeTarget.m
//  Wittgenstein

#import "BridgeTarget.h"

@implementation BridgeTarget

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(get:(RCTResponseSenderBlock)callback)
{
  // Change this depending on what you want to retrieve:
  NSString* someString = @"something";
  
  callback(@[someString]);
}

@end