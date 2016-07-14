// BridgeTarget.m

#import "BridgeTarget.h"

@implementation BridgeTarget

RCT_EXPORT_MODULE();


// Gets some statistics
RCT_EXPORT_METHOD(get:(NSString*)filename withCallback:(RCTResponseSenderBlock)callback) {

  unsigned long long fileSize = [[[NSFileManager defaultManager] attributesOfItemAtPath:filename error:nil] fileSize];
  
  NSMutableDictionary *response = [NSMutableDictionary dictionary];
  
  
  NSURL *fileURL = [NSURL fileURLWithPath:filename];
  ExtAudioFileRef eaf;
  OSStatus err = ExtAudioFileOpenURL((__bridge CFURLRef)fileURL, &eaf);
  
  if (err) {
    [response setObject:[NSNumber numberWithInt:err] forKey:@"error"];
  }
  
  
  [response setObject:[NSNumber numberWithLongLong:fileSize] forKey:@"fileSize"];
  
  callback(@[response]);
}

@end
