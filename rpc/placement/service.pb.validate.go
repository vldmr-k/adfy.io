// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: placement/service.proto

package placement

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

// define the regex for a UUID once up-front
var _service_uuidPattern = regexp.MustCompile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")

// Validate checks the field values on CreateRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *CreateRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on CreateRequest with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in CreateRequestMultiError, or
// nil if none found.
func (m *CreateRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *CreateRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetPlacment()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, CreateRequestValidationError{
					field:  "Placment",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, CreateRequestValidationError{
					field:  "Placment",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetPlacment()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return CreateRequestValidationError{
				field:  "Placment",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return CreateRequestMultiError(errors)
	}

	return nil
}

// CreateRequestMultiError is an error wrapping multiple validation errors
// returned by CreateRequest.ValidateAll() if the designated constraints
// aren't met.
type CreateRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m CreateRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m CreateRequestMultiError) AllErrors() []error { return m }

// CreateRequestValidationError is the validation error returned by
// CreateRequest.Validate if the designated constraints aren't met.
type CreateRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e CreateRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e CreateRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e CreateRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e CreateRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e CreateRequestValidationError) ErrorName() string { return "CreateRequestValidationError" }

// Error satisfies the builtin error interface
func (e CreateRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sCreateRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = CreateRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = CreateRequestValidationError{}

// Validate checks the field values on CreateResponse with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *CreateResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on CreateResponse with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in CreateResponseMultiError,
// or nil if none found.
func (m *CreateResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *CreateResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetPlacement()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, CreateResponseValidationError{
					field:  "Placement",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, CreateResponseValidationError{
					field:  "Placement",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetPlacement()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return CreateResponseValidationError{
				field:  "Placement",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return CreateResponseMultiError(errors)
	}

	return nil
}

// CreateResponseMultiError is an error wrapping multiple validation errors
// returned by CreateResponse.ValidateAll() if the designated constraints
// aren't met.
type CreateResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m CreateResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m CreateResponseMultiError) AllErrors() []error { return m }

// CreateResponseValidationError is the validation error returned by
// CreateResponse.Validate if the designated constraints aren't met.
type CreateResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e CreateResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e CreateResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e CreateResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e CreateResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e CreateResponseValidationError) ErrorName() string { return "CreateResponseValidationError" }

// Error satisfies the builtin error interface
func (e CreateResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sCreateResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = CreateResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = CreateResponseValidationError{}

// Validate checks the field values on EditRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *EditRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on EditRequest with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in EditRequestMultiError, or
// nil if none found.
func (m *EditRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *EditRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetPlacement()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, EditRequestValidationError{
					field:  "Placement",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, EditRequestValidationError{
					field:  "Placement",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetPlacement()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return EditRequestValidationError{
				field:  "Placement",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return EditRequestMultiError(errors)
	}

	return nil
}

// EditRequestMultiError is an error wrapping multiple validation errors
// returned by EditRequest.ValidateAll() if the designated constraints aren't met.
type EditRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m EditRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m EditRequestMultiError) AllErrors() []error { return m }

// EditRequestValidationError is the validation error returned by
// EditRequest.Validate if the designated constraints aren't met.
type EditRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e EditRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e EditRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e EditRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e EditRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e EditRequestValidationError) ErrorName() string { return "EditRequestValidationError" }

// Error satisfies the builtin error interface
func (e EditRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEditRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = EditRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = EditRequestValidationError{}

// Validate checks the field values on EditResponse with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *EditResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on EditResponse with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in EditResponseMultiError, or
// nil if none found.
func (m *EditResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *EditResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetPlacement()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, EditResponseValidationError{
					field:  "Placement",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, EditResponseValidationError{
					field:  "Placement",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetPlacement()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return EditResponseValidationError{
				field:  "Placement",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return EditResponseMultiError(errors)
	}

	return nil
}

// EditResponseMultiError is an error wrapping multiple validation errors
// returned by EditResponse.ValidateAll() if the designated constraints aren't met.
type EditResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m EditResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m EditResponseMultiError) AllErrors() []error { return m }

// EditResponseValidationError is the validation error returned by
// EditResponse.Validate if the designated constraints aren't met.
type EditResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e EditResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e EditResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e EditResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e EditResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e EditResponseValidationError) ErrorName() string { return "EditResponseValidationError" }

// Error satisfies the builtin error interface
func (e EditResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEditResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = EditResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = EditResponseValidationError{}

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

	if err := m._validateUuid(m.GetId()); err != nil {
		err = IdRequestValidationError{
			field:  "Id",
			reason: "value must be a valid UUID",
			cause:  err,
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return IdRequestMultiError(errors)
	}

	return nil
}

func (m *IdRequest) _validateUuid(uuid string) error {
	if matched := _service_uuidPattern.MatchString(uuid); !matched {
		return errors.New("invalid uuid format")
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

// Validate checks the field values on GetAllByProjectRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *GetAllByProjectRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on GetAllByProjectRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// GetAllByProjectRequestMultiError, or nil if none found.
func (m *GetAllByProjectRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *GetAllByProjectRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetProject()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, GetAllByProjectRequestValidationError{
					field:  "Project",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, GetAllByProjectRequestValidationError{
					field:  "Project",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetProject()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return GetAllByProjectRequestValidationError{
				field:  "Project",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return GetAllByProjectRequestMultiError(errors)
	}

	return nil
}

// GetAllByProjectRequestMultiError is an error wrapping multiple validation
// errors returned by GetAllByProjectRequest.ValidateAll() if the designated
// constraints aren't met.
type GetAllByProjectRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m GetAllByProjectRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m GetAllByProjectRequestMultiError) AllErrors() []error { return m }

// GetAllByProjectRequestValidationError is the validation error returned by
// GetAllByProjectRequest.Validate if the designated constraints aren't met.
type GetAllByProjectRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e GetAllByProjectRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e GetAllByProjectRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e GetAllByProjectRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e GetAllByProjectRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e GetAllByProjectRequestValidationError) ErrorName() string {
	return "GetAllByProjectRequestValidationError"
}

// Error satisfies the builtin error interface
func (e GetAllByProjectRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sGetAllByProjectRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = GetAllByProjectRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = GetAllByProjectRequestValidationError{}

// Validate checks the field values on GetAllByProjectResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *GetAllByProjectResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on GetAllByProjectResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// GetAllByProjectResponseMultiError, or nil if none found.
func (m *GetAllByProjectResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *GetAllByProjectResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetPlacements() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, GetAllByProjectResponseValidationError{
						field:  fmt.Sprintf("Placements[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, GetAllByProjectResponseValidationError{
						field:  fmt.Sprintf("Placements[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return GetAllByProjectResponseValidationError{
					field:  fmt.Sprintf("Placements[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return GetAllByProjectResponseMultiError(errors)
	}

	return nil
}

// GetAllByProjectResponseMultiError is an error wrapping multiple validation
// errors returned by GetAllByProjectResponse.ValidateAll() if the designated
// constraints aren't met.
type GetAllByProjectResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m GetAllByProjectResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m GetAllByProjectResponseMultiError) AllErrors() []error { return m }

// GetAllByProjectResponseValidationError is the validation error returned by
// GetAllByProjectResponse.Validate if the designated constraints aren't met.
type GetAllByProjectResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e GetAllByProjectResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e GetAllByProjectResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e GetAllByProjectResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e GetAllByProjectResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e GetAllByProjectResponseValidationError) ErrorName() string {
	return "GetAllByProjectResponseValidationError"
}

// Error satisfies the builtin error interface
func (e GetAllByProjectResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sGetAllByProjectResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = GetAllByProjectResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = GetAllByProjectResponseValidationError{}

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
		switch v := interface{}(m.GetPlacement()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, GetResponseValidationError{
					field:  "Placement",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, GetResponseValidationError{
					field:  "Placement",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetPlacement()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return GetResponseValidationError{
				field:  "Placement",
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

// Validate checks the field values on Placement with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Placement) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Placement with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in PlacementMultiError, or nil
// if none found.
func (m *Placement) ValidateAll() error {
	return m.validate(true)
}

func (m *Placement) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if l := utf8.RuneCountInString(m.GetName()); l < 3 || l > 128 {
		err := PlacementValidationError{
			field:  "Name",
			reason: "value length must be between 3 and 128 runes, inclusive",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if all {
		switch v := interface{}(m.GetProject()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, PlacementValidationError{
					field:  "Project",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, PlacementValidationError{
					field:  "Project",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetProject()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PlacementValidationError{
				field:  "Project",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if all {
		switch v := interface{}(m.GetArea()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, PlacementValidationError{
					field:  "Area",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, PlacementValidationError{
					field:  "Area",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetArea()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PlacementValidationError{
				field:  "Area",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if all {
		switch v := interface{}(m.GetTemplate()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, PlacementValidationError{
					field:  "Template",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, PlacementValidationError{
					field:  "Template",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetTemplate()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PlacementValidationError{
				field:  "Template",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if utf8.RuneCountInString(m.GetData()) != 10 {
		err := PlacementValidationError{
			field:  "Data",
			reason: "value length must be 10 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)

	}

	if len(errors) > 0 {
		return PlacementMultiError(errors)
	}

	return nil
}

// PlacementMultiError is an error wrapping multiple validation errors returned
// by Placement.ValidateAll() if the designated constraints aren't met.
type PlacementMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PlacementMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PlacementMultiError) AllErrors() []error { return m }

// PlacementValidationError is the validation error returned by
// Placement.Validate if the designated constraints aren't met.
type PlacementValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PlacementValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PlacementValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PlacementValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PlacementValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PlacementValidationError) ErrorName() string { return "PlacementValidationError" }

// Error satisfies the builtin error interface
func (e PlacementValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPlacement.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PlacementValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PlacementValidationError{}