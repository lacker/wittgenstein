// BridgeTarget.m

#import "BridgeTarget.h"

@implementation BridgeTarget

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(get:(RCTResponseSenderBlock)callback) {
  NSString* response = @"hello bridging world";
  
  callback(@[response]);
}

@end
