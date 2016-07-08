// BridgeTarget.m

#import "BridgeTarget.h"

@implementation BridgeTarget

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(get:(NSString*)filename withCallback:(RCTResponseSenderBlock)callback) {
  NSString* response = [NSString stringWithFormat:@"got filename: %@", filename];
  
  callback(@[response]);
}

@end
