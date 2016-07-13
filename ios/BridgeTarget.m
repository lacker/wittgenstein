// BridgeTarget.m

#import "BridgeTarget.h"

@implementation BridgeTarget

RCT_EXPORT_MODULE();


// Gets some statistics
RCT_EXPORT_METHOD(get:(NSString*)filename withCallback:(RCTResponseSenderBlock)callback) {

  unsigned long long fileSize = [[[NSFileManager defaultManager] attributesOfItemAtPath:filename error:nil] fileSize];
  
  NSMutableDictionary *response = [NSMutableDictionary dictionary];
  
  [response setObject:[NSNumber numberWithLongLong:fileSize] forKey:@"fileSize"];
  
  callback(@[response]);
}

@end
