// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: media/service.proto

package media

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on AllRequest with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *AllRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on AllRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in AllRequestMultiError, or
// nil if none found.
func (m *AllRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *AllRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return AllRequestMultiError(errors)
	}

	return nil
}

// AllRequestMultiError is an error wrapping multiple validation errors
// returned by AllRequest.ValidateAll() if the designated constraints aren't met.
type AllRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m AllRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m AllRequestMultiError) AllErrors() []error { return m }

// AllRequestValidationError is the validation error returned by
// AllRequest.Validate if the designated constraints aren't met.
type AllRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e AllRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e AllRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e AllRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e AllRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e AllRequestValidationError) ErrorName() string { return "AllRequestValidationError" }

// Error satisfies the builtin error interface
func (e AllRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sAllRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = AllRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = AllRequestValidationError{}

// Validate checks the field values on AllResponse with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *AllResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on AllResponse with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in AllResponseMultiError, or
// nil if none found.
func (m *AllResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *AllResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetMedias() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, AllResponseValidationError{
						field:  fmt.Sprintf("Medias[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, AllResponseValidationError{
						field:  fmt.Sprintf("Medias[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return AllResponseValidationError{
					field:  fmt.Sprintf("Medias[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return AllResponseMultiError(errors)
	}

	return nil
}

// AllResponseMultiError is an error wrapping multiple validation errors
// returned by AllResponse.ValidateAll() if the designated constraints aren't met.
type AllResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m AllResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m AllResponseMultiError) AllErrors() []error { return m }

// AllResponseValidationError is the validation error returned by
// AllResponse.Validate if the designated constraints aren't met.
type AllResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e AllResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e AllResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e AllResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e AllResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e AllResponseValidationError) ErrorName() string { return "AllResponseValidationError" }

// Error satisfies the builtin error interface
func (e AllResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sAllResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = AllResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = AllResponseValidationError{}

// Validate checks the field values on UploadRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *UploadRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on UploadRequest with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in UploadRequestMultiError, or
// nil if none found.
func (m *UploadRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *UploadRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Name

	// no validation rules for Body

	if len(errors) > 0 {
		return UploadRequestMultiError(errors)
	}

	return nil
}

// UploadRequestMultiError is an error wrapping multiple validation errors
// returned by UploadRequest.ValidateAll() if the designated constraints
// aren't met.
type UploadRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m UploadRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m UploadRequestMultiError) AllErrors() []error { return m }

// UploadRequestValidationError is the validation error returned by
// UploadRequest.Validate if the designated constraints aren't met.
type UploadRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UploadRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UploadRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UploadRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UploadRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UploadRequestValidationError) ErrorName() string { return "UploadRequestValidationError" }

// Error satisfies the builtin error interface
func (e UploadRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUploadRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UploadRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UploadRequestValidationError{}

// Validate checks the field values on UploadResponse with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *UploadResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on UploadResponse with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in UploadResponseMultiError,
// or nil if none found.
func (m *UploadResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *UploadResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetMedia()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, UploadResponseValidationError{
					field:  "Media",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, UploadResponseValidationError{
					field:  "Media",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetMedia()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return UploadResponseValidationError{
				field:  "Media",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return UploadResponseMultiError(errors)
	}

	return nil
}

// UploadResponseMultiError is an error wrapping multiple validation errors
// returned by UploadResponse.ValidateAll() if the designated constraints
// aren't met.
type UploadResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m UploadResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m UploadResponseMultiError) AllErrors() []error { return m }

// UploadResponseValidationError is the validation error returned by
// UploadResponse.Validate if the designated constraints aren't met.
type UploadResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UploadResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UploadResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UploadResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UploadResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UploadResponseValidationError) ErrorName() string { return "UploadResponseValidationError" }

// Error satisfies the builtin error interface
func (e UploadResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUploadResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UploadResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UploadResponseValidationError{}

// Validate checks the field values on GetResponse with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *GetResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on GetResponse with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in GetResponseMultiError, or
// nil if none found.
func (m *GetResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *GetResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetMedia()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, GetResponseValidationError{
					field:  "Media",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, GetResponseValidationError{
					field:  "Media",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetMedia()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return GetResponseValidationError{
				field:  "Media",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return GetResponseMultiError(errors)
	}

	return nil
}

// GetResponseMultiError is an error wrapping multiple validation errors
// returned by GetResponse.ValidateAll() if the designated constraints aren't met.
type GetResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m GetResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m GetResponseMultiError) AllErrors() []error { return m }

// GetResponseValidationError is the validation error returned by
// GetResponse.Validate if the designated constraints aren't met.
type GetResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e GetResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e GetResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e GetResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e GetResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e GetResponseValidationError) ErrorName() string { return "GetResponseValidationError" }

// Error satisfies the builtin error interface
func (e GetResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sGetResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = GetResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = GetResponseValidationError{}

// Validate checks the field values on IdRequest with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *IdRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on IdRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in IdRequestMultiError, or nil
// if none found.
func (m *IdRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *IdRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if len(errors) > 0 {
		return IdRequestMultiError(errors)
	}

	return nil
}

// IdRequestMultiError is an error wrapping multiple validation errors returned
// by IdRequest.ValidateAll() if the designated constraints aren't met.
type IdRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m IdRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m IdRequestMultiError) AllErrors() []error { return m }

// IdRequestValidationError is the validation error returned by
// IdRequest.Validate if the designated constraints aren't met.
type IdRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e IdRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e IdRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e IdRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e IdRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e IdRequestValidationError) ErrorName() string { return "IdRequestValidationError" }

// Error satisfies the builtin error interface
func (e IdRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sIdRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = IdRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = IdRequestValidationError{}

// Validate checks the field values on Media with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Media) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Media with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in MediaMultiError, or nil if none found.
func (m *Media) ValidateAll() error {
	return m.validate(true)
}

func (m *Media) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for Path

	// no validation rules for Url

	// no validation rules for Mime

	// no validation rules for Size

	// no validation rules for Width

	// no validation rules for Height

	// no validation rules for Type

	if len(errors) > 0 {
		return MediaMultiError(errors)
	}

	return nil
}

// MediaMultiError is an error wrapping multiple validation errors returned by
// Media.ValidateAll() if the designated constraints aren't met.
type MediaMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m MediaMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m MediaMultiError) AllErrors() []error { return m }

// MediaValidationError is the validation error returned by Media.Validate if
// the designated constraints aren't met.
type MediaValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e MediaValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e MediaValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e MediaValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e MediaValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e MediaValidationError) ErrorName() string { return "MediaValidationError" }

// Error satisfies the builtin error interface
func (e MediaValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sMedia.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = MediaValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = MediaValidationError{}
