// BridgeTarget.m

#import "BridgeTarget.h"

@implementation BridgeTarget

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(get:(NSString*)filename withCallback:(RCTResponseSenderBlock)callback) {

  unsigned long long fileSize = [[[NSFileManager defaultManager] attributesOfItemAtPath:filename error:nil] fileSize];
  
  NSString* response = [NSString stringWithFormat:@"got filename: %@ with size: %llu", filename, fileSize];
  
  callback(@[response]);
}

@end
