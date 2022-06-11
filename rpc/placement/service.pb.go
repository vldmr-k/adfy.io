// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.6.1
// source: placement/service.proto

package placement

import (
	area "adfy.io/rpc/area"
	project "adfy.io/rpc/project"
	template "adfy.io/rpc/template"
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

type CreateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Placment *Placement `protobuf:"bytes,1,opt,name=placment,proto3" json:"placment,omitempty"`
}

func (x *CreateRequest) Reset() {
	*x = CreateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_placement_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateRequest) ProtoMessage() {}

func (x *CreateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_placement_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateRequest.ProtoReflect.Descriptor instead.
func (*CreateRequest) Descriptor() ([]byte, []int) {
	return file_placement_service_proto_rawDescGZIP(), []int{0}
}

func (x *CreateRequest) GetPlacment() *Placement {
	if x != nil {
		return x.Placment
	}
	return nil
}

type CreateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Placement *Placement `protobuf:"bytes,1,opt,name=placement,proto3" json:"placement,omitempty"`
}

func (x *CreateResponse) Reset() {
	*x = CreateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_placement_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateResponse) ProtoMessage() {}

func (x *CreateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_placement_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateResponse.ProtoReflect.Descriptor instead.
func (*CreateResponse) Descriptor() ([]byte, []int) {
	return file_placement_service_proto_rawDescGZIP(), []int{1}
}

func (x *CreateResponse) GetPlacement() *Placement {
	if x != nil {
		return x.Placement
	}
	return nil
}

type EditRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Placement *Placement `protobuf:"bytes,1,opt,name=placement,proto3" json:"placement,omitempty"`
}

func (x *EditRequest) Reset() {
	*x = EditRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_placement_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EditRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EditRequest) ProtoMessage() {}

func (x *EditRequest) ProtoReflect() protoreflect.Message {
	mi := &file_placement_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EditRequest.ProtoReflect.Descriptor instead.
func (*EditRequest) Descriptor() ([]byte, []int) {
	return file_placement_service_proto_rawDescGZIP(), []int{2}
}

func (x *EditRequest) GetPlacement() *Placement {
	if x != nil {
		return x.Placement
	}
	return nil
}

type EditResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Placement *Placement `protobuf:"bytes,1,opt,name=placement,proto3" json:"placement,omitempty"`
}

func (x *EditResponse) Reset() {
	*x = EditResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_placement_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EditResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EditResponse) ProtoMessage() {}

func (x *EditResponse) ProtoReflect() protoreflect.Message {
	mi := &file_placement_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EditResponse.ProtoReflect.Descriptor instead.
func (*EditResponse) Descriptor() ([]byte, []int) {
	return file_placement_service_proto_rawDescGZIP(), []int{3}
}

func (x *EditResponse) GetPlacement() *Placement {
	if x != nil {
		return x.Placement
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
		mi := &file_placement_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IdRequest) ProtoMessage() {}

func (x *IdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_placement_service_proto_msgTypes[4]
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
	return file_placement_service_proto_rawDescGZIP(), []int{4}
}

func (x *IdRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetByProjectRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Project *IdRequest `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
}

func (x *GetByProjectRequest) Reset() {
	*x = GetByProjectRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_placement_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetByProjectRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetByProjectRequest) ProtoMessage() {}

func (x *GetByProjectRequest) ProtoReflect() protoreflect.Message {
	mi := &file_placement_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetByProjectRequest.ProtoReflect.Descriptor instead.
func (*GetByProjectRequest) Descriptor() ([]byte, []int) {
	return file_placement_service_proto_rawDescGZIP(), []int{5}
}

func (x *GetByProjectRequest) GetProject() *IdRequest {
	if x != nil {
		return x.Project
	}
	return nil
}

type GetByProjectResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Placements []*Placement `protobuf:"bytes,1,rep,name=placements,proto3" json:"placements,omitempty"`
}

func (x *GetByProjectResponse) Reset() {
	*x = GetByProjectResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_placement_service_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetByProjectResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetByProjectResponse) ProtoMessage() {}

func (x *GetByProjectResponse) ProtoReflect() protoreflect.Message {
	mi := &file_placement_service_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetByProjectResponse.ProtoReflect.Descriptor instead.
func (*GetByProjectResponse) Descriptor() ([]byte, []int) {
	return file_placement_service_proto_rawDescGZIP(), []int{6}
}

func (x *GetByProjectResponse) GetPlacements() []*Placement {
	if x != nil {
		return x.Placements
	}
	return nil
}

type GetResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Placement *Placement `protobuf:"bytes,1,opt,name=placement,proto3" json:"placement,omitempty"`
}

func (x *GetResponse) Reset() {
	*x = GetResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_placement_service_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetResponse) ProtoMessage() {}

func (x *GetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_placement_service_proto_msgTypes[7]
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
	return file_placement_service_proto_rawDescGZIP(), []int{7}
}

func (x *GetResponse) GetPlacement() *Placement {
	if x != nil {
		return x.Placement
	}
	return nil
}

type Placement struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       string             `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     string             `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Project  *project.Project   `protobuf:"bytes,4,opt,name=project,proto3" json:"project,omitempty"`
	Area     *area.Area         `protobuf:"bytes,5,opt,name=area,proto3" json:"area,omitempty"`
	Template *template.Template `protobuf:"bytes,6,opt,name=template,proto3" json:"template,omitempty"`
	Data     string             `protobuf:"bytes,7,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *Placement) Reset() {
	*x = Placement{}
	if protoimpl.UnsafeEnabled {
		mi := &file_placement_service_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Placement) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Placement) ProtoMessage() {}

func (x *Placement) ProtoReflect() protoreflect.Message {
	mi := &file_placement_service_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Placement.ProtoReflect.Descriptor instead.
func (*Placement) Descriptor() ([]byte, []int) {
	return file_placement_service_proto_rawDescGZIP(), []int{8}
}

func (x *Placement) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Placement) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Placement) GetProject() *project.Project {
	if x != nil {
		return x.Project
	}
	return nil
}

func (x *Placement) GetArea() *area.Area {
	if x != nil {
		return x.Area
	}
	return nil
}

func (x *Placement) GetTemplate() *template.Template {
	if x != nil {
		return x.Template
	}
	return nil
}

func (x *Placement) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

var File_placement_service_proto protoreflect.FileDescriptor

var file_placement_service_proto_rawDesc = []byte{
	0x0a, 0x17, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15, 0x61, 0x64, 0x66, 0x79, 0x2e,
	0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74,
	0x1a, 0x15, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x61, 0x72, 0x65, 0x61, 0x2f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x16, 0x74, 0x65, 0x6d,
	0x70, 0x6c, 0x61, 0x74, 0x65, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61,
	0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2c, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x63, 0x2d, 0x67, 0x65, 0x6e, 0x2d, 0x73, 0x77, 0x61, 0x67, 0x67, 0x65, 0x72,
	0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74,
	0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x4d, 0x0a, 0x0d, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3c, 0x0a, 0x08, 0x70, 0x6c, 0x61, 0x63,
	0x6d, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x61, 0x64, 0x66,
	0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x08, 0x70, 0x6c,
	0x61, 0x63, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x50, 0x0a, 0x0e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3e, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x63,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x61, 0x64,
	0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x09, 0x70,
	0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x4d, 0x0a, 0x0b, 0x45, 0x64, 0x69, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3e, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x63, 0x65,
	0x6d, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x61, 0x64, 0x66,
	0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x09, 0x70, 0x6c,
	0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x4e, 0x0a, 0x0c, 0x45, 0x64, 0x69, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3e, 0x0a, 0x09, 0x70, 0x6c, 0x61, 0x63, 0x65,
	0x6d, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x61, 0x64, 0x66,
	0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x09, 0x70, 0x6c,
	0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0x25, 0x0a, 0x09, 0x49, 0x64, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x18, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0xb0, 0x01, 0x01, 0x52, 0x02, 0x69, 0x64, 0x22, 0x51,
	0x0a, 0x13, 0x47, 0x65, 0x74, 0x42, 0x79, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x3a, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f,
	0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x49,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x22, 0x58, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x42, 0x79, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x40, 0x0a, 0x0a, 0x70, 0x6c, 0x61,
	0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x20, 0x2e,
	0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52,
	0x0a, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x22, 0x4d, 0x0a, 0x0b, 0x47,
	0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3e, 0x0a, 0x09, 0x70, 0x6c,
	0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e,
	0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52,
	0x09, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x22, 0xf9, 0x01, 0x0a, 0x09, 0x50,
	0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1e, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a, 0xfa, 0x42, 0x07, 0x72, 0x05, 0x10, 0x03, 0x18,
	0x80, 0x01, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x36, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a,
	0x65, 0x63, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x61, 0x64, 0x66, 0x79,
	0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x2e,
	0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x12, 0x2a, 0x0a, 0x04, 0x61, 0x72, 0x65, 0x61, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16,
	0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x61, 0x72, 0x65,
	0x61, 0x2e, 0x41, 0x72, 0x65, 0x61, 0x52, 0x04, 0x61, 0x72, 0x65, 0x61, 0x12, 0x3a, 0x0a, 0x08,
	0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e,
	0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x74, 0x65, 0x6d,
	0x70, 0x6c, 0x61, 0x74, 0x65, 0x2e, 0x54, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x52, 0x08,
	0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x12, 0x1c, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x42, 0x08, 0xfa, 0x42, 0x05, 0x72, 0x03, 0x98, 0x01, 0x0a,
	0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x32, 0xb4, 0x03, 0x0a, 0x10, 0x50, 0x6c, 0x61, 0x63, 0x65,
	0x6d, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x55, 0x0a, 0x06, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x24, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e,
	0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x61, 0x64,
	0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x4b, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x20, 0x2e, 0x61, 0x64, 0x66, 0x79,
	0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e,
	0x74, 0x2e, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x61, 0x64,
	0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x67, 0x0a, 0x0c, 0x47, 0x65, 0x74, 0x42, 0x79, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12,
	0x2a, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c,
	0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x47, 0x65, 0x74, 0x42, 0x79, 0x50, 0x72, 0x6f,
	0x6a, 0x65, 0x63, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2b, 0x2e, 0x61, 0x64,
	0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x2e, 0x47, 0x65, 0x74, 0x42, 0x79, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4f, 0x0a, 0x04, 0x45, 0x64, 0x69, 0x74,
	0x12, 0x22, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x70,
	0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x45, 0x64, 0x69, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72,
	0x70, 0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x45, 0x64, 0x69,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x42, 0x0a, 0x06, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x12, 0x20, 0x2e, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2e, 0x72, 0x70,
	0x63, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x49, 0x64, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x42, 0x9e, 0x01,
	0x5a, 0x15, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x2f, 0x72, 0x70, 0x63, 0x2f, 0x70, 0x6c,
	0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x92, 0x41, 0x83, 0x01, 0x12, 0x3d, 0x0a, 0x36, 0x41,
	0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x20, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74,
	0x20, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x20, 0x54, 0x77, 0x69, 0x72, 0x70, 0x2f, 0x4a,
	0x53, 0x4f, 0x4e, 0x20, 0x41, 0x50, 0x49, 0x20, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x32, 0x03, 0x31, 0x2e, 0x30, 0x2a, 0x01, 0x02, 0x72, 0x3f, 0x0a,
	0x19, 0x41, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x20, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x20,
	0x72, 0x65, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x6f, 0x72, 0x79, 0x12, 0x22, 0x68, 0x74, 0x74, 0x70,
	0x73, 0x3a, 0x2f, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x76,
	0x6c, 0x64, 0x6d, 0x72, 0x2d, 0x6b, 0x2f, 0x61, 0x64, 0x66, 0x79, 0x2e, 0x69, 0x6f, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_placement_service_proto_rawDescOnce sync.Once
	file_placement_service_proto_rawDescData = file_placement_service_proto_rawDesc
)

func file_placement_service_proto_rawDescGZIP() []byte {
	file_placement_service_proto_rawDescOnce.Do(func() {
		file_placement_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_placement_service_proto_rawDescData)
	})
	return file_placement_service_proto_rawDescData
}

var file_placement_service_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_placement_service_proto_goTypes = []interface{}{
	(*CreateRequest)(nil),        // 0: adfy.io.rpc.placement.CreateRequest
	(*CreateResponse)(nil),       // 1: adfy.io.rpc.placement.CreateResponse
	(*EditRequest)(nil),          // 2: adfy.io.rpc.placement.EditRequest
	(*EditResponse)(nil),         // 3: adfy.io.rpc.placement.EditResponse
	(*IdRequest)(nil),            // 4: adfy.io.rpc.placement.IdRequest
	(*GetByProjectRequest)(nil),  // 5: adfy.io.rpc.placement.GetByProjectRequest
	(*GetByProjectResponse)(nil), // 6: adfy.io.rpc.placement.GetByProjectResponse
	(*GetResponse)(nil),          // 7: adfy.io.rpc.placement.GetResponse
	(*Placement)(nil),            // 8: adfy.io.rpc.placement.Placement
	(*project.Project)(nil),      // 9: adfy.io.rpc.project.Project
	(*area.Area)(nil),            // 10: adfy.io.rpc.area.Area
	(*template.Template)(nil),    // 11: adfy.io.rpc.template.Template
	(*empty.Empty)(nil),          // 12: google.protobuf.Empty
}
var file_placement_service_proto_depIdxs = []int32{
	8,  // 0: adfy.io.rpc.placement.CreateRequest.placment:type_name -> adfy.io.rpc.placement.Placement
	8,  // 1: adfy.io.rpc.placement.CreateResponse.placement:type_name -> adfy.io.rpc.placement.Placement
	8,  // 2: adfy.io.rpc.placement.EditRequest.placement:type_name -> adfy.io.rpc.placement.Placement
	8,  // 3: adfy.io.rpc.placement.EditResponse.placement:type_name -> adfy.io.rpc.placement.Placement
	4,  // 4: adfy.io.rpc.placement.GetByProjectRequest.project:type_name -> adfy.io.rpc.placement.IdRequest
	8,  // 5: adfy.io.rpc.placement.GetByProjectResponse.placements:type_name -> adfy.io.rpc.placement.Placement
	8,  // 6: adfy.io.rpc.placement.GetResponse.placement:type_name -> adfy.io.rpc.placement.Placement
	9,  // 7: adfy.io.rpc.placement.Placement.project:type_name -> adfy.io.rpc.project.Project
	10, // 8: adfy.io.rpc.placement.Placement.area:type_name -> adfy.io.rpc.area.Area
	11, // 9: adfy.io.rpc.placement.Placement.template:type_name -> adfy.io.rpc.template.Template
	0,  // 10: adfy.io.rpc.placement.PlacementService.Create:input_type -> adfy.io.rpc.placement.CreateRequest
	4,  // 11: adfy.io.rpc.placement.PlacementService.Get:input_type -> adfy.io.rpc.placement.IdRequest
	5,  // 12: adfy.io.rpc.placement.PlacementService.GetByProject:input_type -> adfy.io.rpc.placement.GetByProjectRequest
	2,  // 13: adfy.io.rpc.placement.PlacementService.Edit:input_type -> adfy.io.rpc.placement.EditRequest
	4,  // 14: adfy.io.rpc.placement.PlacementService.Delete:input_type -> adfy.io.rpc.placement.IdRequest
	1,  // 15: adfy.io.rpc.placement.PlacementService.Create:output_type -> adfy.io.rpc.placement.CreateResponse
	7,  // 16: adfy.io.rpc.placement.PlacementService.Get:output_type -> adfy.io.rpc.placement.GetResponse
	6,  // 17: adfy.io.rpc.placement.PlacementService.GetByProject:output_type -> adfy.io.rpc.placement.GetByProjectResponse
	3,  // 18: adfy.io.rpc.placement.PlacementService.Edit:output_type -> adfy.io.rpc.placement.EditResponse
	12, // 19: adfy.io.rpc.placement.PlacementService.Delete:output_type -> google.protobuf.Empty
	15, // [15:20] is the sub-list for method output_type
	10, // [10:15] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_placement_service_proto_init() }
func file_placement_service_proto_init() {
	if File_placement_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_placement_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateRequest); i {
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
		file_placement_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateResponse); i {
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
		file_placement_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EditRequest); i {
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
		file_placement_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EditResponse); i {
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
		file_placement_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
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
		file_placement_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetByProjectRequest); i {
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
		file_placement_service_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetByProjectResponse); i {
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
		file_placement_service_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
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
		file_placement_service_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Placement); i {
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
			RawDescriptor: file_placement_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_placement_service_proto_goTypes,
		DependencyIndexes: file_placement_service_proto_depIdxs,
		MessageInfos:      file_placement_service_proto_msgTypes,
	}.Build()
	File_placement_service_proto = out.File
	file_placement_service_proto_rawDesc = nil
	file_placement_service_proto_goTypes = nil
	file_placement_service_proto_depIdxs = nil
}
