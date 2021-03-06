// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.6.1
// source: media/service.proto

package media

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	empty "github.com/golang/protobuf/ptypes/empty"
	_ "github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger/options"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Media_MediaType int32

const (
	Media_IMAGE Media_MediaType = 0
	Media_VIDEO Media_MediaType = 1
)

// Enum value maps for Media_MediaType.
var (
	Media_MediaType_name = map[int32]string{
		0: "IMAGE",
		1: "VIDEO",
	}
	Media_MediaType_value = map[string]int32{
		"IMAGE": 0,
		"VIDEO": 1,
	}
)

func (x Media_MediaType) Enum() *Media_MediaType {
	p := new(Media_MediaType)
	*p = x
	return p
}

func (x Media_MediaType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Media_MediaType) Descriptor() protoreflect.EnumDescriptor {
	return file_media_service_proto_enumTypes[0].Descriptor()
}

func (Media_MediaType) Type() protoreflect.EnumType {
	return &file_media_service_proto_enumTypes[0]
}

func (x Media_MediaType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Media_MediaType.Descriptor instead.
func (Media_MediaType) EnumDescriptor() ([]byte, []int) {
	return file_media_service_proto_rawDescGZIP(), []int{6, 0}
}

type AllRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *AllRequest) Reset() {
	*x = AllRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AllRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AllRequest) ProtoMessage() {}

func (x *AllRequest) ProtoReflect() protoreflect.Message {
	mi := &file_media_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AllRequest.ProtoReflect.Descriptor instead.
func (*AllRequest) Descriptor() ([]byte, []int) {
	return file_media_service_proto_rawDescGZIP(), []int{0}
}

type AllResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Medias []*Media `protobuf:"bytes,1,rep,name=medias,proto3" json:"medias,omitempty"`
}

func (x *AllResponse) Reset() {
	*x = AllResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AllResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AllResponse) ProtoMessage() {}

func (x *AllResponse) ProtoReflect() protoreflect.Message {
	mi := &file_media_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AllResponse.ProtoReflect.Descriptor instead.
func (*AllResponse) Descriptor() ([]byte, []int) {
	return file_media_service_proto_rawDescGZIP(), []int{1}
}

func (x *AllResponse) GetMedias() []*Media {
	if x != nil {
		return x.Medias
	}
	return nil
}

type UploadRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Body []byte `protobuf:"bytes,2,opt,name=body,proto3" json:"body,omitempty"`
}

func (x *UploadRequest) Reset() {
	*x = UploadRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadRequest) ProtoMessage() {}

func (x *UploadRequest) ProtoReflect() protoreflect.Message {
	mi := &file_media_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadRequest.ProtoReflect.Descriptor instead.
func (*UploadRequest) Descriptor() ([]byte, []int) {
	return file_media_service_proto_rawDescGZIP(), []int{2}
}

func (x *UploadRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UploadRequest) GetBody() []byte {
	if x != nil {
		return x.Body
	}
	return nil
}

type UploadResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Media *Media `protobuf:"bytes,1,opt,name=media,proto3" json:"media,omitempty"`
}

func (x *UploadResponse) Reset() {
	*x = UploadResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadResponse) ProtoMessage() {}

func (x *UploadResponse) ProtoReflect() protoreflect.Message {
	mi := &file_media_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadResponse.ProtoReflect.Descriptor instead.
func (*UploadResponse) Descriptor() ([]byte, []int) {
	return file_media_service_proto_rawDescGZIP(), []int{3}
}

func (x *UploadResponse) GetMedia() *Media {
	if x != nil {
		return x.Media
	}
	return nil
}

type GetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Media *Media `protobuf:"bytes,1,opt,name=media,proto3" json:"media,omitempty"`
}

func (x *GetResponse) Reset() {
	*x = GetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetResponse) ProtoMessage() {}

func (x *GetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_media_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetResponse.ProtoReflect.Descriptor instead.
func (*GetResponse) Descriptor() ([]byte, []int) {
	return file_media_service_proto_rawDescGZIP(), []int{4}
}

func (x *GetResponse) GetMedia() *Media {
	if x != nil {
		return x.Media
	}
	return nil
}

type IdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *IdRequest) Reset() {
	*x = IdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IdRequest) ProtoMessage() {}

func (x *IdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_media_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IdRequest.ProtoReflect.Descriptor instead.
func (*IdRequest) Descriptor() ([]byte, []int) {
	return file_media_service_proto_rawDescGZIP(), []int{5}
}

func (x *IdRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type Media struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     string          `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Path   string          `protobuf:"bytes,2,opt,name=path,proto3" json:"path,omitempty"`
	Url    string          `protobuf:"bytes,3,opt,name=url,proto3" json:"url,omitempty"`
	Mime   string          `protobuf:"bytes,4,opt,name=mime,proto3" json:"mime,omitempty"`
	Size   int32           `protobuf:"varint,5,opt,name=size,proto3" json:"size,omitempty"`
	Width  int32           `protobuf:"varint,6,opt,name=width,proto3" json:"width,omitempty"`
	Height int32           `protobuf:"varint,7,opt,name=height,proto3" json:"height,omitempty"`
	Type   Media_MediaType `protobuf:"varint,8,opt,name=type,proto3,enum=adfy.io.rpc.media.Media_MediaType" json:"type,omitempty"`
}

func (x *Media) Reset() {
	*x = Media{}
	if protoimpl.UnsafeEnabled {
		mi := &file_media_service_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Media) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Media) ProtoMessage() {}

func (x *Media) ProtoReflect() protoreflect.Message {
	mi := &file_media_service_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Media.ProtoReflect.Descriptor instead.
func (*Media) Descriptor() ([]byte, []int) {
	return file_media_service_proto_rawDescGZIP(), []int{6}
}

func (x *Media) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Media) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *Media) GetUrl() string {
	if x != nil {
		return x.Url
	}
	return ""
}

func (x *Media) GetMime() string {
	if x != nil {
		return x.Mime
	}
	return ""
}

func (x *Media) GetSize() int32 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *Media) GetWidth() int32 {
	if x != nil {
		return x.Width
	}
	return 0
}

func (x *Media) GetHeight() int32 {
	if x != nil {
		return x.Height
	}
	return 0
}

func (x *Media) GetType() Media_MediaType {
	if x != nil {
		return x.Type
	}
	return Media_IMAGE
}

var File_media_service_proto protoreflect.FileDescriptor

var file_media_service_proto_rawDesc = []byte{
	0x0a, 0x13, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x11, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72,
	0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61,
	0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x2c, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x2d, 0x67, 0x65, 0x6e, 0x2d, 0x73, 0x77,
	0x61, 0x67, 0x67, 0x65, 0x72, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x61, 0x6e,
	0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x0c, 0x0a, 0x0a,
	0x41, 0x6c, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x3f, 0x0a, 0x0b, 0x41, 0x6c,
	0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a, 0x06, 0x6d, 0x65, 0x64,
	0x69, 0x61, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x61, 0x64, 0x66, 0x79,
	0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x4d, 0x65,
	0x64, 0x69, 0x61, 0x52, 0x06, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x73, 0x22, 0x37, 0x0a, 0x0d, 0x55,
	0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x12, 0x0a, 0x04, 0x62, 0x6f, 0x64, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04,
	0x62, 0x6f, 0x64, 0x79, 0x22, 0x40, 0x0a, 0x0e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x05, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e,
	0x72, 0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x52,
	0x05, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x22, 0x3d, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x05, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72,
	0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x52, 0x05,
	0x6d, 0x65, 0x64, 0x69, 0x61, 0x22, 0x1b, 0x0a, 0x09, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x22, 0xee, 0x01, 0x0a, 0x05, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04,
	0x70, 0x61, 0x74, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x70, 0x61, 0x74, 0x68,
	0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75,
	0x72, 0x6c, 0x12, 0x12, 0x0a, 0x04, 0x6d, 0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6d, 0x69, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x77, 0x69,
	0x64, 0x74, 0x68, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68,
	0x12, 0x16, 0x0a, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x36, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x22, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f,
	0x2e, 0x72, 0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61,
	0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x22, 0x21, 0x0a, 0x09, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x54, 0x79, 0x70, 0x65, 0x12, 0x09, 0x0a,
	0x05, 0x49, 0x4d, 0x41, 0x47, 0x45, 0x10, 0x00, 0x12, 0x09, 0x0a, 0x05, 0x56, 0x49, 0x44, 0x45,
	0x4f, 0x10, 0x01, 0x32, 0xa8, 0x02, 0x0a, 0x0c, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0x44, 0x0a, 0x03, 0x41, 0x6c, 0x6c, 0x12, 0x1d, 0x2e, 0x61, 0x64,
	0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e,
	0x41, 0x6c, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x61, 0x64, 0x66,
	0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x41,
	0x6c, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4d, 0x0a, 0x06, 0x55, 0x70,
	0x6c, 0x6f, 0x61, 0x64, 0x12, 0x20, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72,
	0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f,
	0x2e, 0x72, 0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61,
	0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x43, 0x0a, 0x03, 0x47, 0x65, 0x74,
	0x12, 0x1c, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x6d,
	0x65, 0x64, 0x69, 0x61, 0x2e, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e,
	0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64,
	0x69, 0x61, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3e,
	0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x1c, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e,
	0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x6d, 0x65, 0x64, 0x69, 0x61, 0x2e, 0x49, 0x64, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x42, 0x95,
	0x01, 0x5a, 0x11, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2f, 0x72, 0x70, 0x63, 0x2f, 0x6d,
	0x65, 0x64, 0x69, 0x61, 0x92, 0x41, 0x7f, 0x12, 0x39, 0x0a, 0x32, 0x41, 0x64, 0x66, 0x79, 0x2e,
	0x69, 0x6f, 0x20, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x20, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x20, 0x54, 0x77, 0x69, 0x72, 0x70, 0x2f, 0x4a, 0x53, 0x4f, 0x4e, 0x20, 0x41, 0x50, 0x49, 0x20,
	0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x32, 0x03, 0x31,
	0x2e, 0x30, 0x2a, 0x01, 0x02, 0x72, 0x3f, 0x0a, 0x19, 0x41, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f,
	0x20, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x20, 0x72, 0x65, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x6f,
	0x72, 0x79, 0x12, 0x22, 0x68, 0x74, 0x74, 0x70, 0x73, 0x3a, 0x2f, 0x2f, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x76, 0x6c, 0x64, 0x6d, 0x72, 0x2d, 0x6b, 0x2f, 0x61,
	0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_media_service_proto_rawDescOnce sync.Once
	file_media_service_proto_rawDescData = file_media_service_proto_rawDesc
)

func file_media_service_proto_rawDescGZIP() []byte {
	file_media_service_proto_rawDescOnce.Do(func() {
		file_media_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_media_service_proto_rawDescData)
	})
	return file_media_service_proto_rawDescData
}

var file_media_service_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_media_service_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_media_service_proto_goTypes = []interface{}{
	(Media_MediaType)(0),   // 0: adfy.io.rpc.media.Media.MediaType
	(*AllRequest)(nil),     // 1: adfy.io.rpc.media.AllRequest
	(*AllResponse)(nil),    // 2: adfy.io.rpc.media.AllResponse
	(*UploadRequest)(nil),  // 3: adfy.io.rpc.media.UploadRequest
	(*UploadResponse)(nil), // 4: adfy.io.rpc.media.UploadResponse
	(*GetResponse)(nil),    // 5: adfy.io.rpc.media.GetResponse
	(*IdRequest)(nil),      // 6: adfy.io.rpc.media.IdRequest
	(*Media)(nil),          // 7: adfy.io.rpc.media.Media
	(*empty.Empty)(nil),    // 8: google.protobuf.Empty
}
var file_media_service_proto_depIdxs = []int32{
	7, // 0: adfy.io.rpc.media.AllResponse.medias:type_name -> adfy.io.rpc.media.Media
	7, // 1: adfy.io.rpc.media.UploadResponse.media:type_name -> adfy.io.rpc.media.Media
	7, // 2: adfy.io.rpc.media.GetResponse.media:type_name -> adfy.io.rpc.media.Media
	0, // 3: adfy.io.rpc.media.Media.type:type_name -> adfy.io.rpc.media.Media.MediaType
	1, // 4: adfy.io.rpc.media.MediaService.All:input_type -> adfy.io.rpc.media.AllRequest
	3, // 5: adfy.io.rpc.media.MediaService.Upload:input_type -> adfy.io.rpc.media.UploadRequest
	6, // 6: adfy.io.rpc.media.MediaService.Get:input_type -> adfy.io.rpc.media.IdRequest
	6, // 7: adfy.io.rpc.media.MediaService.Delete:input_type -> adfy.io.rpc.media.IdRequest
	2, // 8: adfy.io.rpc.media.MediaService.All:output_type -> adfy.io.rpc.media.AllResponse
	4, // 9: adfy.io.rpc.media.MediaService.Upload:output_type -> adfy.io.rpc.media.UploadResponse
	5, // 10: adfy.io.rpc.media.MediaService.Get:output_type -> adfy.io.rpc.media.GetResponse
	8, // 11: adfy.io.rpc.media.MediaService.Delete:output_type -> google.protobuf.Empty
	8, // [8:12] is the sub-list for method output_type
	4, // [4:8] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_media_service_proto_init() }
func file_media_service_proto_init() {
	if File_media_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_media_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AllRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_media_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AllResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_media_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_media_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_media_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_media_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IdRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_media_service_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Media); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_media_service_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_media_service_proto_goTypes,
		DependencyIndexes: file_media_service_proto_depIdxs,
		EnumInfos:         file_media_service_proto_enumTypes,
		MessageInfos:      file_media_service_proto_msgTypes,
	}.Build()
	File_media_service_proto = out.File
	file_media_service_proto_rawDesc = nil
	file_media_service_proto_goTypes = nil
	file_media_service_proto_depIdxs = nil
}
